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
    "description" : "Ufff, thanks! Another room, the same task as last time - " + 
                    "can you please turn me so that I face the exit?",
    "hint" : "Note the exit is to the right of Karla. But, Karla does not have " + 
             "a command to turn right, only to turn left. Turning right is the " + 
             "same as turning left three times. Define the command so that it will turn " + 
             "Karla left three times. Or, even better, define the command by reusing the " +
             "'turn-back' command from the previous room: turn right is the same as " +
             "turning back and then turning left.",
    "command" : "turn-right",
    "tests" : [
        {
            "description" : "Kouká na sever. Pokročí.",
            "start" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},{"exit" : true},null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null,null,null]}
        }
    ]
}]

