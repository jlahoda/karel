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
    "description" : "Thanks for guiding me through that room! Can you guide me " + 
                    "through this room as well?",
    "hint": "This is similar to the previous room - Karla just needs to go forward. " +
            "The difference now is that the exit is far away. Instead of specifying " +
            "the move command 6 times, use the 'repeat' command to repeat the 'move' " + 
            "command 6 times.",
    "command" : "six-steps",
    "tests" : [
        {
            "description" : "Šest kroků na sever.",
            "start" : {"rows":[null,{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null,null,null,null,null,null,null]}
        }
    ]
}]
