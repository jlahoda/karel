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
    "description" : "DESC_10",
    "hint" : "HINT_10",
    "command" : "find-exit-from-middle",
    "tests" : [
        {
            "description" : "Otoč se a jdi domů.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, {"robot": 4}, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, null, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"exit": true}]},
    {"columns":[null, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, null]},
    {"columns":[null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null]},
    {"columns":[null, null, null, null, null, null, null, null, null, null]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        },
        {
            "description" : "Značky nech na původním místě.",
            "start" : {"rows": [
    {"columns":[{"exit": true}, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, {"robot": 2}, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, null, null, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,
                    {"columns":[null,null,null,null,null,null,null,{"robot":0,"marks":1},null,null]},
                    null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        },
        {
            "description" : "A odsuď trefíš?",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, {"robot": 1}, null, null, null, null, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, null, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, {"exit": true}, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,,null,null,null,null,null,null]}]}
        }
    ]
}]
