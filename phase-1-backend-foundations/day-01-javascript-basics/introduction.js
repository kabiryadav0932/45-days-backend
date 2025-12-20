/*

                                    javaScript :-

Everything in jS happens inside an "Execution Context".



+--------+-----+-------+
| Memory     |  Code   |
+--------+-----+-------+
| a : 10     |   o     |
| fun : {___}|   o     |
+--------+-----+-------+

- here anothe name for 'memory' is variable environment, wherre all the key:value paired stored and
  for code, another name is 'Thread of Execution', where every code executed one line at a time.


- jS is a synchronous single-threaded language 
meaning - it can execute one command at a time, then after it goes for next command.

- callstack maintains the order of Execution of execution contexts
 There are many names for callstack :-
 a) Program Stack
 b) Execution Context Stack
 c) Control Stack
 d) Runtime Stack
 e) Machine Stack

*/