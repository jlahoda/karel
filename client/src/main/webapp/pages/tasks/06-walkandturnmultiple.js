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
    "description" : "<p>That was good, thank you for walking me through!</p>" +
                    "<p>We've got another problem, I'm afraid: the interference is " +
                    "more intensive across next few rooms. Would you please provide " +
                    "me instructions that will guide me through them?</p>",
    "hint": "<p>Karla needs to go straight for a bit, then turn right, " +
            "and the go straight for a bit more. Unlike previous cases, there are multiple " + 
            "rooms now, and the same instructions must work for all of them. " +
            "Note that Karla cannot step into a wall - she could scratch herself. " +
            "Please use the is wall condition to walk until the wall is right " +
            "in front of her, and then turn. There's no need to stop at exit, " +
            "Karla will walk through it on her own.</p>",
    "command" : "check-walk-turn-walk",
    "tests" : [
        {
            "description" : "Krok na sever.",
            "start" : {"rows":[{"columns":[null,null,null,null,null,null,{"exit":true},null,null,null]},null,null,null,null,null,{"columns":[{"robot":4,"marks":0},null,null,null,null,null,null,null,null,null]},null,null,null]},
            "end" : {"rows":[null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null,null]},null,null]},
        },
        {
            "description" : "Krok na sever.",
            "start" : {"rows":[{"columns":[null,null,null,null,{"exit":true},null,null,null,null,null]},null,null,null,{"columns":[{"robot":4,"marks":0},null,null,null,null,null,null,null,null,null]},null,null,null,null,null]},
            "end" : {"rows":[null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null,null]},null,null]},
        },
        {
            "description" : "Krok na sever.",
            "start" : {"rows":[{"columns":[null,null,null,null,null,null,null,null,{"exit":true},null]},null,null,null,null,null,null,null,{"columns":[{"robot":4,"marks":0},null,null,null,null,null,null,null,null,null]},null]},
            "end" : {"rows":[null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null,null]},null,null]},
        }
    ]
}]
