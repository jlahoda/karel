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
    "description" : "<p>Ohhh, another room! Thanks for your help so far!</p>" +
                    "<p>I am afraid the interference is getting worse. My sight is " +
                    "very impaired now. I am sure it will get better when I get out " +
                    "of this building. But, for now, I'm afraid I'll need you to " + 
                    "provide me instructions to reach the exit, not only to stand next to it.</p>",
    "hint" : "The exit is two rows ahead of Karla. Just define the command so that Karla " +
             "moves twice.",
    "command" : "two-steps",
    "tests" : [
        {
            "description" : "Kouká na sever. Otočí se na východ.",
            "start" : {"rows":[null,null,null,null,null,{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":1,"marks":0},null,null,null,null,null,null]},null,null]}
        }
    ]
}]

