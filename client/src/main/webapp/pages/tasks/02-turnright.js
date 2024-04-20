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
    "description" : "DESC_02",
    "hint" : "HINT_02",
    "command" : "turn-right",
    "solution" : '{"type":"karel_funkce","id":"[O#K*O/J=o!EXE]J].11","fields":{"NAME":"turn-right"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"JAIMknD;*AZ+Mj:Qik2u","fields":{"CALL":"turn-back"},"next":{"block":{"type":"karel_call","id":"``r$=Kx[YDlRr@$Y_`/$","fields":{"CALL":"LEFT"}}}}}}}',
    "tests" : [
        {
            "description" : "Kouká na sever. Pokročí.",
            "start" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},{"exit" : true},null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null,null,null]}
        }
    ]
}]

