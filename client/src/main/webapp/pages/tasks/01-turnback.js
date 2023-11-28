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
    "description" : "<p>Uff, thanks for helping me to get out of the room.</p>" +
                    "<p>I am in another room now. I am afraid I'll need your help " +
                    "to get out of not only this room, but to get through a series " +
                    "of rooms, to get out of this build.</p>" +
                    "<p>Also, there's a lot of interference here, I'm afraid " +
                    "you cannot give me commands one by one. I'll need you to " +
                    "provide me a list of command I can follow.</p>" +
                    "<p>Luckily, some of my sight is still preserved, despite the " +
                    "interference, so it will be enough to ensure I am facing the " +
                    "exit.</p>"
        , 
    "hint": "Note the exit is behind Karla. Turn her so that she faces back. Do " +
            "it by doing to left turn. Fill the commands in the pre-created " +
            "'turn-back' command, and press GO!",
    "command" : "turn-back",
    "tests" : [
        {
            "description" : "Turn Karla so that she faces the exit.",
            "start" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        }
    ]
}]

