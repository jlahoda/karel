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
    "description" : "DESC_08",
    "hint" : "HINT_08",
    "command" : "path-to-exit",
    "solution" : ' {"type":"karel_funkce","id":"8pMTKc2.:CL1h.kmEx3(","fields":{"NAME":"path-to-exit"},"inputs":{"IFTRUE":{"block":{"type":"karel_while","id":"2%u$INaq4a)@N+jd^^hC","fields":{"NEG":"FALSE","COND":"EXIT"},"inputs":{"IFTRUE":{"block":{"type":"karel_while","id":"O@iYrTPYmMe5nKNe4%qe","fields":{"NEG":"FALSE","COND":"WALL"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"N1*KBp+Iuy5DF5v$L1]q","fields":{"CALL":"STEP"}}}},"next":{"block":{"type":"karel_if_else","id":"j1U@KAr|E95?a%Hc^Sn1","fields":{"NEG":"TRUE","COND":"EAST"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"7z77Q*t6;*J6_yoAv?~C","fields":{"CALL":"LEFT"}}},"IFFALSE":{"block":{"type":"karel_call","id":"Hu}RXfAY[/[;q7?pHX^@","fields":{"CALL":"turn-right"}}}}}}}}}}}}}',
    "tests" : [
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, {"exit": true}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"robot": 1}, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, {"exit": true}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, null, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[null, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"robot": 1}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows": [
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"exit": true}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, null, null, null]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, {"marks": 111}, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]},
    {"columns":[{"robot": 1}, null, null, null, null, null, null, {"marks": 111}, {"marks": 111}, {"marks": 111}]}
]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
    ]
}]
