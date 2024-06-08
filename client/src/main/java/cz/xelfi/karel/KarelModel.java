/**
 * Karel
 * Copyright (C) 2014-2015 Jaroslav Tulach <jaroslav.tulach@apidesign.org>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. Look for COPYING file in the top folder.
 * If not, see http://opensource.org/licenses/GPL-2.0.
 */
package cz.xelfi.karel;

import cz.xelfi.karel.blockly.Execution.State;
import cz.xelfi.karel.blockly.Language;
import cz.xelfi.karel.blockly.Procedure;
import cz.xelfi.karel.blockly.Workspace;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.ListIterator;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import net.java.html.json.ComputedProperty;
import net.java.html.json.Function;
import net.java.html.json.Model;
import net.java.html.json.ModelOperation;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;

/** Model annotation generates class Data with
 * one message property, boolean property and read only words property
 */
@Model(className = "Karel", targetId = "", instance = true, builder = "assign", properties = {
    @Property(name = "tab", type = String.class),
    @Property(name = "message", type = String.class),
    @Property(name = "currentTask", type = TaskDescription.class),
    @Property(name = "currentInfo", type = TaskInfo.class),
    @Property(name = "scratch", type = Scratch.class),
    @Property(name = "commands", type = Command.class, array = true),
    @Property(name = "manualCommands", type = Command.class, array = true),
    @Property(name = "selectedCommand", type = Command.class),
    @Property(name = "source", type = String.class),
    @Property(name = "speed", type = int.class),
    @Property(name = "paused", type = boolean.class),
    @Property(name = "running", type = boolean.class),
    @Property(name = "tasksUrl", type = String.class),
    @Property(name = "tasks", type = TaskInfo.class, array = true),
    @Property(name = "exitReached", type = boolean.class),
    @Property(name = "isFreeForm", type = boolean.class),
    @Property(name = "commandDone", type = boolean.class),
    @Property(name = "primaryCommandEmpty", type = boolean.class),
    @Property(name = "gameStarted", type = boolean.class),
    @Property(name = "jumpToLevelVisible", type = boolean.class),
    @Property(name = "languageSelectionVisible", type = boolean.class),
})
final class KarelModel {
    /** @guardedby(this) */
    private List<List<KarelCompiler>> pausedFrames;
    private static Karel karel;
    private static final Timer KAREL = new Timer("Karel Moves");
    private static Workspace workspace;

    static Karel onPageLoad(String... args) throws Exception {
        String queryString = args.length > 0 ? args[0] : "";
        if (queryString.startsWith("?")) {
            queryString = queryString.substring(1);
        }
        for (String part : queryString.split("\\&")) {
            String[] keyAndvalue = part.split("=", 2);
            if ("lang".equals(keyAndvalue[0])) {
                Language.setLanguage(keyAndvalue[1]);
            }
        }
        String src = Storage.getDefault().get("source", "\n\n");
        final Scratch s = new Scratch();
        s.getTowns().clear();
        s.getTowns().add(new Town());
        s.setCurrent(0);

        karel = new Karel().
                assignTab("home").
                assignSpeed(10).
                assignScratch(s).
                assignSource(src).
                assignCurrentTask(null).
                assignCurrentInfo(null).
                assignSelectedCommand(null).
                assignTasksUrl("tasks/list.js");
        KarelModel.compile(karel, false);
        karel.applyBindings();

        final Workspace workArea = KarelModel.findWorkspace(karel);
        workArea.addSelectionChange(new Runnable() {
            @Override
            public void run() {
                refreshCommands(karel, true);
            }
        });

        {
            //temporary: attempt to switch to test tabs:
            Karel m = karel;
        String tasks = m.getTasksUrl();
        m.loadTasks(tasks, new URI(tasks));
        m.setTab("task");
        m.setGameStarted(false);
//        KAREL.schedule(new TimerTask() {
//            @Override
//            public void run() {
//                List<TaskInfo> currentTasks = m.getTasks();
//                chooseTask(m, currentTasks.get(0));
//            }
//        }, 0);
//        chooseTask(m, currentTasks.get(0)); //TODO: check all handled
        }

        return karel;
    }

    @ComputedProperty
    static boolean canStartScratch(Command selectedCommand, boolean running) {
        return !running && selectedCommand != null;
    }

    @Function
    static void collapse(Karel model) {
        Workspace w = findWorkspace(model);
        Procedure proc = w.getSelectedProcedure();
        if (proc != null) {
            proc.setCollapsed(true);
        }
    }

    @Function
    static void expand(Karel model) {
        Workspace w = findWorkspace(model);
        Procedure proc = w.getSelectedProcedure();
        if (proc != null) {
            proc.setCollapsed(false);
        }
    }

    @Function
    static void showCode(Karel model) {
        Workspace w = findWorkspace(model);
        Procedure proc = w.getSelectedProcedure();
        if (proc != null) {
            model.setSource(proc.getCode());
            model.setTab("edit");
        }
    }

//    @Function
//    static void useTestForScratch(Karel model, TaskTestCase data) {
//        data.getStart().copyTo(model.getScratch().getTown());
//    }

    @Model(className = "Command", properties = {
        @Property(name = "id", type = String.class),
        @Property(name = "name", type = String.class)
    })
    final static class CommandModel {
    }

    @Function static void changeTabTown(Karel m) {
        m.setTab("town");
        refreshCommands(m, true);
    }

    @ModelOperation @Function static void changeTabTask(Karel m) throws URISyntaxException {
        String tasks = m.getTasksUrl();
        m.loadTasks(tasks, new URI(tasks));
        m.setTab("task");
    }

    @ModelOperation @Function static void nextTask(Karel m) throws URISyntaxException {
        //development: dump the content of the current command
//        for (Procedure p : workspace.getProcedures()) {
//            if (p.getName().equals(karel.getCurrentTask().getCommandLocalized())) {
//                System.err.println("p: " + p.dump2JSON());
//            }
//        }

        List<TaskInfo> currentTasks = m.getTasks();
        int idx = currentTasks.indexOf(m.getCurrentInfo());
        chooseTask(m, currentTasks.get(idx + 1)); //TODO: check all handled
        m.setExitReached(false);
        m.setCommandDone(false);
        m.getScratch().setCurrent(0);
    }

    @Function static void changeTabEdit(Karel m) {
        m.setTab("edit");
    }

    @Function static void changeTabHome(Karel m) {
        m.setTab("home");
    }

    @Function static void changeTabAbout(Karel m) {
        m.setTab("about");
    }

    @Function static void templateShown(Karel m) {
        if ("edit".equals(m.getTab())) {
            refreshCommands(m, false);
        }
    }

    static Workspace findWorkspace(Karel model) {
        if (workspace == null) {
            workspace = Workspace.create("workspace");
        }
        return workspace;
    }

//    @Function
//    static void loadWorkspace(Karel m) {
//        String xml = Storage.getDefault().get("workspace", null);
//        if (xml != null) {
//            final Workspace w = findWorkspace(m);
//            w.clear();
//            w.loadXML(xml);
//        }
//        String json = Storage.getDefault().get("town", null);
//        if (json != null) {
//            ByteArrayInputStream is = new ByteArrayInputStream(json.getBytes());
//            try {
//                Town town = Models.parse(BrwsrCtx.findDefault(KarelModel.class), Town.class, is);
//                TownModel.load(m.getScratch().getTown(), town);
//            } catch (IOException ex) {
//                ex.printStackTrace();
//            }
//        }
//    }
//
//    @Function
//    static void storeWorkspace(Karel m) {
//        Storage.getDefault().put("workspace", findWorkspace(m).toString());
//        Storage.getDefault().put("town", TownModel.toJSON(m.getScratch().getTown()));
//    }

    private static final Set<String> MANUAL_COMMANDS = new HashSet<>(Arrays.asList("STEP", "LEFT"));

    private static void refreshCommands(Karel m, boolean select) {
        Procedure selectedProc = findWorkspace(m).getSelectedProcedure();
        Command selectedCommand = null;

        List<Command> arr = new ArrayList<>(m.getCommands());
        int index = 0;
        for (Procedure p : findWorkspace(m).getProcedures()) {
            Command current = index < arr.size() ? arr.get(0) : null;
            if (current != null && current.getId().equals(p.getId())) {
                current.setName(p.getName());
            } else {
                arr.add(index, new Command(p.getId(), p.getName()));
            }
            if (selectedProc != null && selectedProc.getId().equals(p.getId())) {
                selectedCommand = arr.get(index);
            }
            index++;
        }
        if (index < arr.size()) {
            arr.subList(index, arr.size()).clear();
        }
        m.assignCommands(arr.toArray(new Command[0]));
        List<Command> manualCommands = new ArrayList<>();
        for (Command c : arr) {
            if (MANUAL_COMMANDS.contains(c.getId())) {
                manualCommands.add(c);
            }
        }
        m.assignManualCommands(manualCommands.toArray(new Command[0]));
        if (select) {
            m.setSelectedCommand(selectedCommand);
        }
    }

    @Function static void invokeScratch(Karel m) {
        Command data = m.getSelectedCommand();
        if (data == null) {
            return;
        }
        invokeScratch(m, data);
    }

    @Function static void invokeManual(Karel m, Command data) {
        invokeScratch(m, data);
    }

    @Function static void invokeScratch(Karel m, Command data) {
        Procedure procedure = findWorkspace(m).findProcedure(data.getId());
        if (procedure == null) {
            refreshCommands(m, false);
            return;
        }
        List<KarelCompiler> comps = new ArrayList<>();
        KarelCompiler frame = KarelCompiler.execute(m.getScratch().getTowns().get(m.getScratch().getCurrent()), procedure, data.getName());
        comps.add(frame);
        m.animate(comps);
    }

    @Function static void invokeGo(Karel m) {
        for (Command c : karel.getCommands()) {
            if (c.getName().equals(karel.getCurrentTask().getCommandLocalized())) {
                invokeScratch(m, c);
                return ;
            }
        }
    }

    @Function static void invoke(Karel m, Command data) {
        Procedure procedure = findWorkspace(m).findProcedure(data.getId());
        if (procedure == null) {
            refreshCommands(m, false);
            return;
        }
        List<TaskTestCase> arr = m.getCurrentTask().getTests();
        TaskTestCase showing = null;
        List<KarelCompiler> comps = new ArrayList<>();
        for (TaskTestCase c : arr) {
            TaskModel.TestCaseModel.reset(c, false, null);
            if (c.getShowing() != null) {
                showing = c;
            }
            KarelCompiler frame = KarelCompiler.execute(c.getCurrent(), procedure, data.getName());
            comps.add(frame);
        }
        if (showing == null && arr.size() > 0) {
            arr.get(0).setShowing("current");
        }
        m.animate(comps);
    }

    @Function static void edit(Karel m) {
        String cmd = m.getCurrentTask().getCommandLocalized();
        Workspace w = findWorkspace(m);
        Procedure proc = w.findProcedure(cmd);
        if (proc == null) {
            proc = w.newProcedure(cmd);
        }
        proc.select();
        m.setTab("town");
    }

    @Function static void stop(Karel m) {
        m.setRunning(false);
    }

    @Function
    void pause(Karel m) {
        List<List<KarelCompiler>> wakeUp = Collections.emptyList();
        synchronized (this) {
            if (this.pausedFrames == null) {
                this.pausedFrames = new ArrayList<>();
                m.setPaused(true);
            } else {
                wakeUp = this.pausedFrames;
                this.pausedFrames = null;
                m.setPaused(false);
            }
        }
        for (List<KarelCompiler> frames : wakeUp) {
            animate(m, frames);
        }
    }

    @Function
    void step(Karel m) {
        synchronized (this) {
            if (this.pausedFrames == null) {
                return;
            }
            ListIterator<List<KarelCompiler>> it = pausedFrames.listIterator();
            while (it.hasNext()) {
                List<KarelCompiler> frames = it.next();
                List<KarelCompiler> newFrames = animateOne(m, frames);
                it.set(newFrames);
            }
        }
    }

    @ModelOperation void animate(final Karel model, List<KarelCompiler> frames) {
        final List<KarelCompiler> next = animateOne(model, frames);
        if (!next.isEmpty()) {
            animateNext(model, next);
        } else {
            final TaskDescription currentTask = model.getCurrentTask();
            if (currentTask != null) {
                List<TaskInfo> currentTasks = model.getTasks();
                int task = currentTasks.indexOf(model.getCurrentInfo());
                boolean[] finished = new boolean[] {task > 0};
                Town t = model.getScratch().getTowns().get(model.getScratch().getCurrent());
                int[] orientation = new int[3];
                Square robotSquare = TownModel.findKarelSquare(t, orientation);
                if (task == 1 || task == 2) {
                    orientation = TownModel.stepInDirection(orientation);
                    try {
                        boolean headingToExit = t.getRows().get(orientation[1]).getColumns().get(orientation[0]).isExit();
                        if (headingToExit) {
                            Procedure move = workspace.findProcedure("STEP");

                            animateNext(model, Arrays.asList(KarelCompiler.execute(t, move, "move")));
                            finished[0] = false;
                            return ;
                        }
                    } catch (IndexOutOfBoundsException ex) {
                        //access beyond limits, OK
                    }
                }
                if (robotSquare.isExit()) {
                    //success!!
                    int testCount = model.getCurrentTask().getTests().size();
                    Town currentScratch = model.getScratch().getTowns().get(model.getScratch().getCurrent());
                    int[] karel = TownModel.findKarel(currentScratch);

                    currentScratch.getRows().get(karel[0]).getColumns().get(karel[1]).setRobot(0);

                    if (model.getScratch().getCurrent() + 1 < testCount) {
                        int spd = adjustSpeed(getRawSpeed(model));
                        Procedure procedure = findWorkspace(model).findProcedure(model.getCurrentTask().getCommandLocalized());
                        List<KarelCompiler> comps = new ArrayList<>();
                        KarelCompiler frame = KarelCompiler.execute(model.getScratch().getTowns().get(model.getScratch().getCurrent() + 1), procedure, model.getCurrentTask().getCommandLocalized());
                        comps.add(frame);
                        KAREL.schedule(new TimerTask() {
                            @Override
                            public void run() {
                                model.getScratch().setCurrent(model.getScratch().getCurrent() + 1);
                                model.animate(comps);
                            }
                        }, spd);
                        model.setExitReached(false);
                        finished[0] = false;
                    } else {
                        model.setExitReached(true);
                        finished[0] = true;
                    }
                }
                model.setCommandDone(finished[0]);
            }
            model.setRunning(false);
        }
    }

    void animateNext(final Karel model, List<KarelCompiler> next) {
        model.setRunning(true);
        int spd = getRawSpeed(model);
        if (spd < 0) {
            animate(model, next);
        } else {
            synchronized (this) {
                if (this.pausedFrames != null) {
                    this.pausedFrames.add(next);
                    return;
                }
            }

            spd = adjustSpeed(spd);

            KAREL.schedule(new TimerTask() {
                @Override
                public void run() {
                    if (!model.isRunning()) {
                        return;
                    }
                    model.animate(next);
                }
            }, spd);
        }
    }

    private static int getRawSpeed(Karel model) {
        return 1000 / model.getSpeed();
    }

    private static int adjustSpeed(int spd) {
        spd *= 3;

        if (spd < 3) {
            spd = 3;
        }
        if (spd > 1000) {
            spd = 1000;
        }
        return spd;
    }

    private static List<KarelCompiler> animateOne(final Karel model, List<KarelCompiler> frames) {
        final List<KarelCompiler> next = new ArrayList<>();
        for (KarelCompiler frame : frames) {
            State nxt = frame.exec.next();
            switch (nxt) {
                case RUNNING:
                    next.add(frame);
                    continue;
                case FINISHED:
                    continue;
                default:
                    final Town t = frame.town;
                    int e = 0;
                    switch (nxt) {
                        case ERROR_EMPTY:
                            e = 2;
                            break;
                        case ERROR_FULL:
                            e = 3;
                            break;
                        case ERROR_WALL:
                            e = 1;
                            break;
                        case ERROR_NOT_FOUND:
                            e = 4;
                            break;
                    }
                    t.setError(e);
                    t.getErrorParams().clear();
                    //ex.fillParams(t.getErrorParams());
            }
        }
        return next;
    }

    @ModelOperation @Function static void compile(Karel m) {
        TaskModel.DescriptionModel.reset(m.getCurrentTask(), false);
        compile(m, true);
    }
    static void compile(Karel m, boolean switchToTown) {
        refreshCommands(m, false);
        if (switchToTown) {
            m.setTab("town");
        }
    }

    @Function
    static void loadSource(Karel m) {
        StringBuilder sb = new StringBuilder();
        Workspace w = findWorkspace(m);
        for (Procedure p : w.getProcedures()) {
            sb.append("\n").append(p.getCode()).append("\n");
        }
        m.setSource(sb.toString());
    }

    @Function
    static void compileSource(Karel m) {
        Workspace w = findWorkspace(m);
        w.parse(m.getSource());
        refreshCommands(m, true);
        m.setTab("town");
    }

    private static boolean containsURL(List<TaskInfo> arr, String url) {
        for (TaskInfo ti : arr) {
            if (url.equals(ti.getUrl())) {
                return true;
            }
        }
        return false;
    }

    @OnReceive(url = "{url}", onError = "errorLoadingTask")
    static void loadTasks(Karel m, TaskInfo[] arr, URI baseUrl) {
        for (TaskInfo ti : arr) {
            URI url = baseUrl.resolve(ti.getUrl());
            if (!containsURL(m.getTasks(), url.toString())) {
                ti.setUrl(url.toString());
                m.getTasks().add(ti);
            }
        }

        int gathered = 0;
        for (TaskInfo ti : m.getTasks()) {
            gathered += ti.getAwarded();
        }
        int persistGathered = Storage.getDefault().getInt("gathered", 0);
        if (persistGathered > gathered) {
            gathered = persistGathered;
        } else {
            Storage.getDefault().putInt("gathered", gathered);
        }
        for (TaskInfo ti : m.getTasks()) {
            ti.setDisabled(ti.getRequired() > gathered);
        }
    }

    @ModelOperation @Function static void chooseTask(Karel m, TaskInfo data) {
        m.setCurrentTask(null);
        m.setCurrentInfo(data);
        if (data.getDescription() == null) {
            m.loadTaskDescription(data.getUrl(), data);
        } else {
            loadTaskDescription(m, data.getDescription(), data);
        }
    }

    @OnReceive(url = "{url}", onError = "errorLoadingTask")
    static void loadTaskDescription(Karel m, TaskDescription td, TaskInfo data) {
        data.setDescription(td);
        m.getScratch().getTowns().clear();
        for (TaskTestCase c : td.getTests()) {
            Town e = new Town();
            TownModel.load(e, c.getEnd());
            c.setEnd(e);
            Town s = new Town();
            TownModel.load(s, c.getStart());
            c.setStart(s);
            TaskModel.TestCaseModel.reset(c, true, "");
            Town scratch = new Town();
            TownModel.load(scratch, c.getStart());
            m.getScratch().getTowns().add(scratch);
        }
        m.setCurrentTask(td);
        m.setTab("town");
        if (td.getCommandLocalized()!= null) {
            Workspace w = findWorkspace(m);
            for (Procedure existing : w.getProcedures()) {
                if (td.getCommandLocalized().equals(existing.getId())) {
                    existing.setCollapsed(false);
                } else {
                    existing.setCollapsed(true);
                }
            }
            edit(m);
        }
        m.setIsFreeForm(td.getCommandLocalized()!= null && td.getCommandLocalized().equals("freeform"));
    }

    static void errorLoadingTask(Karel m, Exception ex) {
        TaskDescription td = new TaskDescription("Error", "Cannot load task: " + ex.getLocalizedMessage(),null, null, null, 0);
        m.setCurrentTask(td);
    }

    @Function
    static void tryAgain(Karel m) {
        m.getScratch().getTowns().clear();
        for (TaskTestCase c : m.getCurrentTask().getTests()) {
            Town scratch = new Town();
            TownModel.load(scratch, c.getStart());
            m.getScratch().getTowns().add(scratch);
        }
        m.getScratch().setCurrent(0);
        m.setCommandDone(false);
        m.setExitReached(false);
    }

    private static final Pattern PROCEDURE_NAME = Pattern.compile("\"(NAME|CALL)\":\"([A-Za-z-]+)\"");

    @Function
    static void giveUp(Karel m) {
        tryAgain(m);
        for (Procedure p : workspace.getProcedures()) {
            if (p.getName().equals(karel.getCurrentTask().getCommandLocalized())) {
                p.dispose();
            }
        }

        installSolution(karel.getCurrentTask().getSolution());
    }

    static void installSolution(String solution) {
        Matcher matcher = PROCEDURE_NAME.matcher(solution);
        StringBuilder translated = new StringBuilder();
        int lastOffset = 0;

        while (matcher.find()) {
            String key = matcher.group(1);
            String procedure = matcher.group(2);

            translated.append(solution.substring(lastOffset, matcher.start()));
            translated.append("\"" + key + "\":\"" + localizedCommand(procedure) + "\"");
            lastOffset = matcher.end();
        }

        translated.append(solution.substring(lastOffset));

        solution = translated.toString();

        workspace.loadBlock(solution);
    }

    @Function
    static void doStop(Karel m) {
        m.setCommandDone(false);
        m.setExitReached(false);
        m.setRunning(false);
    }

    @ModelOperation @Function static void startGame(Karel m) {
        List<TaskInfo> currentTasks = m.getTasks();
        chooseTask(m, currentTasks.get(0));
        m.setGameStarted(true);
    }

    @ModelOperation @Function static void removeAllCommands(Karel m) {
        for (Procedure p : workspace.getProcedures()) {
            p.dispose();
        }
    }

    @ModelOperation @Function static void toggleJumpToLevel(Karel m) {
        m.setJumpToLevelVisible(!m.isJumpToLevelVisible());
    }

    @ModelOperation @Function static void toggleLanguageSelectionVisible(Karel m) {
        m.setLanguageSelectionVisible(!m.isLanguageSelectionVisible());
    }

    @ModelOperation @Function static void jumpToLevel(Karel m, TaskInfo data) {
        TaskInfo current = m.getTasks().get(0);

        if (current.getDescription() == null) {
            m.jumpToLevelDescriptionLoaded(current.getUrl(), current, data);
        } else {
            jumpToLevelDescriptionLoaded(m, current.getDescription(), current, data);
        }
    }

    @OnReceive(url = "{url}", onError = "errorLoadingTask")
    static void jumpToLevelDescriptionLoaded(Karel m, TaskDescription td, TaskInfo data, TaskInfo targetTask) {
        data.setDescription(td);

        if (data == targetTask) {
            m.setCurrentInfo(data);
            loadTaskDescription(m, data.getDescription(), data);
            m.setJumpToLevelVisible(false);
            return ;
        }

        boolean installSolution = true;

        for (Procedure p : workspace.getProcedures()) {
            if (p.getName().equals(data.getDescription().getCommandLocalized())) {
                installSolution = false;
                break;
            }
        }

        if (installSolution && data.getDescription().getSolution() != null) {
            installSolution(data.getDescription().getSolution());
        }

        List<TaskInfo> tasks = m.getTasks();

        for (int i = 0; i < tasks.size(); i++) {
            TaskInfo currentTask = tasks.get(i);

            if (currentTask == data) {
                TaskInfo nextTask = tasks.get(i + 1);
                if (nextTask.getDescription() == null) {
                    m.jumpToLevelDescriptionLoaded(nextTask.getUrl(), nextTask, targetTask);
                } else {
                    jumpToLevelDescriptionLoaded(m, nextTask.getDescription(), nextTask, targetTask);
                }

                break;
            }
        }
    }

    @ComputedProperty
    static String hardcodedStartText() {
        return XXXlocalize("HARDCODED_StartText");
    }

    @ComputedProperty
    static String hardcodedStartCommand() {
        return XXXlocalize("HARDCODED_StartCommand");
    }

    @ComputedProperty
    static String hardcodedHINT() {
        return XXXlocalize("HARDCODED_HINT");
    }

    @ComputedProperty
    static String tryAgainCommand() {
        return XXXlocalize("HARDCODED_TryAgain");
    }

    @ComputedProperty
    static String giveUpCommand() {
        return XXXlocalize("HARDCODED_GiveUp");
    }

    @ComputedProperty
    static String nextRoomCommand() {
        return XXXlocalize("HARDCODED_NextRoom");
    }

    @ComputedProperty
    static String stopCommand() {
        return XXXlocalize("HARDCODED_Stop");
    }

    @ComputedProperty
    static String goCommand(TaskDescription currentTask) {
        return XXXlocalize("HARDCODED_Go") + " " +
               new MessageFormat(XXXlocalize("HARDCODED_GoHint")).format(new String[] {currentTask != null ? currentTask.getCommandLocalized(): ""});
    }

    @ComputedProperty
    static String didReachExit() {
        return XXXlocalize("HARDCODED_DidntReachExit");
    }

    private static final Map<String, Properties> locale2Properties = new HashMap<>();
    private static final Map<String, Properties> baseLocale2Properties = new HashMap<>();

    private static Properties getLocaleProperties(String language) {
        Properties props = locale2Properties.get(language);
        if (props == null) {
            props = new Properties();
            try (InputStream resourceAsStream = TaskModel.class.getResourceAsStream("Bundle_" + language + ".properties")) {
                if (resourceAsStream != null) {
                    props.load(resourceAsStream);
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            locale2Properties.put(language, props);
        }

        return props;
    }

    private static Properties getBaseLocaleProperties(String language) {
        Properties baseProps = baseLocale2Properties.get(language);
        if (baseProps == null) {
            baseProps = new Properties();
            try (InputStream resourceAsStream = TaskModel.class.getResourceAsStream("Bundle.properties")) {
                if (resourceAsStream != null) {
                    baseProps.load(resourceAsStream);
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            baseLocale2Properties.put(language, baseProps);
        }

        return baseProps;
    }

    private static String localize(String language, String key) {
        return getLocaleProperties(language).getProperty(key,
                                                         getBaseLocaleProperties(language).getProperty(key, key));
    }

    public static String XXXlocalize(String key) {
        return localize(Language.getLanguage(), key);
    }

    public static String localizedCommand(String command) {
        String key = "COMMAND_" + command;
        String localized = KarelModel.XXXlocalize(key);

        return key.equals(localized) ? command : localized;
    }

}
