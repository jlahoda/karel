[{
/*
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
    "description" : "DESC_09",
    "hint" : "HINT_09",
    "command" : "find-exit",
    "solution" : '{"type":"karel_funkce","id":"+j{GD/z=E@%hW,Sj+*IO","fields":{"NAME":"find-exit"},"inputs":{"IFTRUE":{"block":{"type":"karel_while","id":"?RH#;U[J?Cb23fmR3L/f","fields":{"NEG":"FALSE","COND":"EXIT"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"hDjYB0K4Fqi/X2JFVC:6","fields":{"CALL":"turn-right"},"next":{"block":{"type":"karel_while","id":"%DQYg7c+Qu)Imgw=PIEp","fields":{"NEG":"TRUE","COND":"WALL"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"hvD%S%[%Sl0/)mX]rGk@","fields":{"CALL":"LEFT"}}}},"next":{"block":{"type":"karel_call","id":"T@S+hyff41)d`bAS}=o4","fields":{"CALL":"STEP"}}}}}}}}}}}}',
    "solution2" : ' {"type":"karel_funkce","id":"#}Q)l9zF4.2:7Q?[mCBC","fields":{"NAME":"find-exit"},"inputs":{"IFTRUE":{"block":{"type":"karel_while","id":"xPkU0$t3KHfhqO/cY8{K","fields":{"NEG":"FALSE","COND":"WALL"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"lJeDS#-5ecKYhf$7PK7~","fields":{"CALL":"STEP"},"next":{"block":{"type":"karel_call","id":"8j`iPxX:-P=13$WV+U=a","fields":{"CALL":"turn-right"},"next":{"block":{"type":"karel_while","id":"HFe!o:/v9d:Pvv*-[OTq","fields":{"NEG":"TRUE","COND":"WALL"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"XUd-XV0ieF7JM~u3d7*e","fields":{"CALL":"LEFT"}}}}}}}}}}}}}}}',
    "tests" : [
        {
            "description" : "Otoč se a jdi domů.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, {"exit": true}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null, null, null, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}]},
    {"columns":[{"robot": 1}, null, null, null, null, null, null, null, null, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        },
        {
            "description" : "Značky nech na původním místě.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, {"exit": true}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, null, null, null]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null]},
    {"columns":[null, null, null, null, null, null, {"marks": 111}, null, null, null]},
    {"columns":[null, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null]},
    {"columns":[null, null, null, {"marks": 111}, null, {"marks": 111}, null, null, null, null]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, {"marks": 111}, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"robot": 1}, null, null, {"marks": 111}, null, null, null, null, null, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,
                    {"columns":[null,null,null,null,null,null,null,{"robot":0,"marks":1},null,null]},
                    null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        },
        {
            "description" : "A odsuď trefíš?",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, {"exit": true}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, null, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, null, null, null, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"robot": 1}, null, null, null, null, null, null, null, null, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        }
    ]
}]
