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
    "description" : "DESC_01",
    "hint": "HINT_01",
    "command" : "turn-back",
    "solution" : '{"type":"karel_funkce","id":"mO=+kAnsiA_lWC?hO3oi","fields":{"NAME":"turn-back"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"5G7yQlA~W-$5h+/4|1m|","fields":{"CALL":"LEFT"},"next":{"block":{"type":"karel_call","id":"Xssa:j908/=7Zz0Z,8px","fields":{"CALL":"LEFT"}}}}}}}',
    "tests" : [
        {
            "description" : "Turn Karla so that she faces the exit.",
            "start" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        }
    ]
}]

