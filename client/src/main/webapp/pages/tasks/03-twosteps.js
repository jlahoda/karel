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
    "description" : "DESC_03",
    "hint" : "HINT_03",
    "command" : "two-steps",
    "solution" : '{"type":"karel_funkce","id":"V?XcQy6KSNE=w|fxQRBJ","fields":{"NAME":"two-steps"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"OEv!g6}(AWsYo9*d#hG/","fields":{"CALL":"STEP"},"next":{"block":{"type":"karel_call","id":"%cD5@efaf`)xX73dH:3:","fields":{"CALL":"STEP"}}}}}}}',
    "tests" : [
        {
            "description" : "Kouká na sever. Otočí se na východ.",
            "start" : {"rows":[null,null,null,null,null,{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":1,"marks":0},null,null,null,null,null,null]},null,null]}
        }
    ]
}]

