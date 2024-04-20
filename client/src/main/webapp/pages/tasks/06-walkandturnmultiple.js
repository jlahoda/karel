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
    "description" : "DESC_06",
    "hint": "HINT_06",
    "command" : "check-walk-turn-walk",
    "solution" : '{"type":"karel_funkce","id":"L8HE=~V=qCHAXh;n~PHd","fields":{"NAME":"check-walk-turn-walk"},"inputs":{"IFTRUE":{"block":{"type":"karel_while","id":"k07iS2RED_0ee~o#(p(%","fields":{"NEG":"FALSE","COND":"WALL"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"N#hJW1I?vkF%aIY1vRa$","fields":{"CALL":"STEP"}}}},"next":{"block":{"type":"karel_call","id":"Yap1qQU=JxZZdg-Nt.fv","fields":{"CALL":"turn-right"},"next":{"block":{"type":"karel_while","id":"fNr=9#K8X}5,MqSJgmBm","fields":{"NEG":"FALSE","COND":"EXIT"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"Y+,$SRX@7I[;4$c09^~h","fields":{"CALL":"STEP"}}}}}}}}}}}}',
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
