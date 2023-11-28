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
    "description" : "<p>Uff, that's another room behind me, thanks!</p>" +
                    "<p>Please help he through this room as well!</p>",
    "hint": "<p>In this room, Karla needs to go straight for a bit, then turn right, " +
            "and the go straight for a bit more. Please use the 'turn-right' command " + 
            "that you defined before to turn right.</p>" +
            "You could also observe that Karla in both cases needs to go exactly " + 
            "6 steps - we have a command for that, why not use it?</p>",
    "command" : "walk-turn-walk",
    "tests" : [
        {
            "description" : "Krok na sever.",
            "start" : {"rows":[{"columns":[null,null,null,null,null,null,{"exit":true},null,null,null]},null,null,null,null,null,{"columns":[{"robot":4,"marks":0},null,null,null,null,null,null,null,null,null]},null,null,null]},
            "end" : {"rows":[null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null,null]},null,null]},
        }
    ]
}]
