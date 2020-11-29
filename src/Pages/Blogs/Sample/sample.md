```markdown
Heading
=======
```

Heading
=======

```markdown
Sub-heading
-----------
```

Sub-heading
-----------

```markdown
### Another deeper heading
```

### Another deeper heading

```markdown
![image-name](file-path)
```

![cat](https://github.com/fireflower0/react-gh-pages-lisp/blob/master/src/Pages/Blogs/Sample/cat.jpg?raw=true)

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes

```markdown
*italic*, **bold**, `monospace`, ~~strikethrough~~ .
```

*italic*, **bold**, 
`monospace`, ~~strikethrough~~ .

Shopping list:

```markdown
* apples
* oranges
* pears
```

  * apples
  * oranges
  * pears

Numbered list:

```markdown
1. apples
2. oranges
3. pears
```

  1. apples
  2. oranges
  3. pears

Tables:

```markdown
| No. | Name |
|:---:|:---|
| 001 | Foo |
| 002 | Bar |
| 003 | Baz |
```

| No. | Name |
|:---:|:---|
| 001 | Foo |
| 002 | Bar |
| 003 | Baz |

Program Code:

```commonlisp
(format t "Hello, world!")
```

```commonlisp
(defun fib (n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (t (+ (fib (- n 1)) (fib (- n 2))))))
```

```clojure
(println "Hello, world!")
```

```c
include <stdio.h>

int main(void) {
  printf("Hello, world!\n");
  return 0;
}
```

```cpp
include <iostream>
using namespace std;

int main(void) {
  cout << "Hello, world!" << endl;
  return 0;
}
```

```java
import java.util.*;

class Hanoi {
    private static void hanoi(int n, char from, char to, char via) {
        if (n > 1) {
            hanoi(n - 1, from, via, to);
            System.out.println(from + " -> " + to);
            hanoi(n - 1, via, to, from);
        } else {
            System.out.println(from + " -> " + to);
        }
    }

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        if (cin.hasNext()) {
            int n = Integer.parseInt(cin.nextLine());
            hanoi(n, 'a', 'b', 'c');
        }
    }
}
```

```python
def hanoi(n, froms, to, via):
    if n > 1:
        hanoi(n - 1, froms, via, to)
        print(froms + " -> " + to)
        hanoi(n - 1, via, to, froms)
    else:
        print(froms + " -> " + to)

n = int(input())
hanoi(n, "a", "b", "c")
```

```ada
with Ada.Text_IO;

procedure FizzBuzz is
begin
   for I in 1 .. 15 loop
      if I mod 15 = 0 then
         Ada.Text_IO.Put_Line("FizzBuzz");
      elsif I mod 3 = 0 then
         Ada.Text_IO.Put_Line("Fizz");
      elsif I mod 5 = 0 then
         Ada.Text_IO.Put_Line("Buzz");
      else
         Ada.Text_IO.Put_Line(Integer'Image(I));
      end if;
   end loop;
end FizzBuzz;
```

```haskell
import Control.Applicative

hanoi :: Int -> String -> String -> String -> [String]
hanoi 1 from to via = [from ++ "->" ++ to]
hanoi n from to via = r1 ++ r2 ++ r3
  where
    r1 = hanoi(n - 1) from via to
    r2 = [from ++ "->" ++ to]
    r3 = hanoi(n - 1) via to from

main = do
  n <- read <$> getLine
  mapM_ print $ hanoi n "a" "b" "c"
```

```hy
(defn fizzbuzz [n]
  (cond [(= (% n 15) 0) "FizzBuzz"]
        [(= (% n 3) 0) "Fizz"]
        [(= (% n 5) 0) "Buzz"]
        [True n]))

(for [i (range 16)]
  (print (fizzbuzz i)))
```

```as
    .global _start

    .text

_start:
    mov $1, %rax
    mov $1, %rdi
    mov $message, %rsi
    mov $13, %rdx
    syscall

    mov $60, %rax
    xor %rdi, %rdi
    syscall

message:
    .ascii "Hello, world!\n"
```

```fortran
      program TEST
         character name*32
         read(*, '(a)') name
         print*, 'Hello, ', name
         stop
      end
```

```kotlin
import java.util.*

fun main(args: Array<String>) {
  val name = Scanner(System.`in`)
  println("Hello, " + name.next())
}
```

```makefile
MSG = "Hello, world!"

all:
	@echo $(MSG)
```

```scheme
(define (fizzbuzz i)
  (cond ((= (modulo i 15) 0) "FizzBuzz")
        ((= (modulo i  3) 0) "Fizz")
        ((= (modulo i  5) 0) "Buzz")
        (else i)))

(define (run i n)
  (when (<= i n)
    (display (fizzbuzz i))
    (newline)
    (run (+ i 1) n)))

(run 1 15)
```

```swift
func fizzbuzz(Num n: Int) {
    for i in 1...n {
        if (i % 15 == 0) {
            print("FizzBuzz")
        } else if (i % 3 == 0) {
            print("Fizz")
        } else if (i % 5 == 0) {
            print("Buzz")
        } else {
            print(i)
        }
    }
}

fizzbuzz(Num: 15)
```

```perl
print(
    (($_ % 3 ? "" : Fizz) . ($_ % 5 ? "" : Buzz) or $ _) . "\n"
)
for 1..15
```

```tcl
proc fizzbuzz {n {m1 3} {m2 5}} {
    for {set i 1} {$i <= $n} {incr i} {
        set ret ""
        if {$i % $m1 == 0} {append ret Fizz}
        if {$i % $m2 == 0} {append ret Buzz}
        puts [expr {$ret eq "" ? $i : $ret}]
    }
}

fizzbuzz 15
```

```scala
object Main {
  def main(args: Array[String]) {
    var name = io.StdIn.readLine
    println("Hello, %s".format(name))
  }
}
```

```csharp
using System;

public class Hanoi {
    public static void Main() {
        string name = Console.ReadLine();
        Console.WriteLine("Hello, " + name);
    }
}
```

```go
package main

import "fmt"

func main() {
  var name string
  fmt.Scan(&name)
  fmt.Println("Hello,", name)
}
```

```crystal
name = read_line.chomp
puts "Hello, " + name
```

```erlang
-module(hello).
-export([main/0]).

main() ->
  Name = read_string(),
  io:format("Hello, ~s~n", [Name]).

read_string() ->
  case io:fread("", "~s") of
    eof -> 0;
    {ok, X} ->
      [Y] = X,
      Y
  end.
```

```javascript
process.stdin.on('data', function (line) {
    console.log("Hello, " + line);
    process.exit(0);
});
```

```julia
function fizzbuzz(i)
    if i % 15 == 0 "FizzBuzz"
    elseif i % 3 == 0 "Fizz"
    elseif i % 5 == 0 "Buzz"
    else i
    end
end

function run(n)
    for i = 1:n
        println(fizzbuzz(i))
    end
end

run(15)
```

```io
for(i, 1, 15, if(i % 15 == 0, "FizzBuzz" println, if(i % 3 == 0, "Fizz" println, if(i % 5 == 0, "Buzz" println, i println))))
```

```clips
(deffacts hanoi (goals tower of 3 A B C))

(defrule move-tower
  ?old-goals <- (goals tower of ?number&~1 ?from ?to ?via $?rest)
  =>
  (retract ?old-goals)
  (assert (goals tower of =(- ?number 1) ?from ?via ?to
    tower of 1 ?from ?to ?via
    tower of =(- ?number 1) ?via ?to ?from ?rest)))

(defrule move-tower-with-one-disk
  ?old-goals <- (goals tower of 1 ?from ?to ?via $?rest)
  =>
  (retract ?old-goals)
  (assert (goals disk ?from ?to ?rest)))

(defrule move-one-disk
  ?old-goals <- (goals disk ?from ?to $?rest)
  =>
  (retract ?old-goals)
  (printout t ?from " -> " ?to crlf)
  (assert (goals ?rest)))

```

```php
<?php
function fizzBuzz(int $n) {
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 15 === 0) {
            echo "FizzBuzz\n";
        } elseif ($i % 3 === 0) {
            echo "Fizz\n";
        } elseif ($i % 5 === 0) {
            echo "Buzz\n";
        } else {
            echo "$i\n";
        }
    }
}

fizzBuzz(15);
```

```vala
class FizzBuzz : Object {
	string run(int i) {
		if(i % 15 == 0) return "FizzBuzz";
		else if(i % 3 == 0) return "Fizz";
		else if(i % 5 == 0) return "Buzz";
		else return i.to_string();
	}

	static void main(string[] args) {
		var fizzbuzz = new FizzBuzz();
		for(int i = 1; i <= 15; i++) {
			print("%s\n", fizzbuzz.run(i));
		}
	}
}
```

```visualbasic
Imports System

Public Class Hanoi
  Public Shared Sub Main()
    Dim name As String
    name = Console.ReadLine()
    Console.WriteLine("Hello, " & name)
  End Sub
End Class
```

```racket
(define (fizzbuzz i)
  (cond ((= (modulo i 15) 0) "FizzBuzz")
        ((= (modulo i  3) 0) "Fizz")
        ((= (modulo i  5) 0) "Buzz")
        (else i)))

(define (run i n)
  (when (<= i n)
    (display (fizzbuzz i))
    (newline)
    (run (+ i 1) n)))

(run 1 15)
```

```pascal
program FizzBuzz;

var i: Integer;

begin
   for i := 1 to 15 do
   begin
      if i mod 15 = 0 then
         writeln ('FizzBuzz')
      else if i mod 3 = 0 then
         writeln ('Fizz')
      else if i mod 5 = 0 then
         writeln ('Buzz')
      else
         writeln (i)
   end;
end.
```

```neko
var fizzbuzz = function(i) {
  if(i % 15 == 0) {
    return "FizzBuzz";
  } else if(i % 3 == 0) {
    return "Fizz";
  } else if(i % 5 == 0) {
    return "Buzz";
  } else {
    return i;
  }
}

var run = function(n) {
  var i = 1
  while(i <= n) {
    $print(fizzbuzz(i) + "\n");
    i ++= 1
  }
}

run(15);
```

```d
import std.stdio;

void fizzbuzz(int n) {
  for (int i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      writeln("FizzBuzz");
    } else if (i % 3 == 0) {
      writeln("Fizz");
    } else if (i % 5 == 0) {
      writeln("Buzz");
    } else {
      writeln(i);
    }
  }
}

void main() {
  fizzbuzz(15);
}
```

```elixir
defmodule FizzBuzz do
  def say(n) do
    Enum.map_join 1..n, fn x ->
      cond do
        rem(x, 15) === 0 -> "FizzBuzz\n"
        rem(x, 3) === 0 -> "Fizz\n"
        rem(x, 5) === 0 -> "Buzz\n"
        true -> Integer.to_string(x) <> "\n"
      end
    end
  end
end

IO.puts FizzBuzz.say(15)
```

```egison
fizzbuzz i :=
  if i % 15 = 0 then print "FizzBuzz"
  else if i % 3 = 0 then print "Fizz"
  else if i % 5 = 0 then print "Buzz"
  else print (show i)

run i n :=
  if i > n then print "End"
  else do { fizzbuzz(i); run(i + 1, n) }

main args :=
  run 1 15
```

```fsharp
let FizzBuzz (i : int) =
    if   i % 15 = 0 then "FizzBuzz"
    elif i %  3 = 0 then "Fizz"
    elif i %  5 = 0 then "Buzz"
    else i.ToString()

let run (n : int) =
    for i = 1 to n do
        printfn "%s" (FizzBuzz i)

run 15
```

```dart
fizzbuzz(int n) {
  for (int i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      print("FizzBuzz");
    } else if (i % 3 == 0) {
      print("Fizz");
    } else if (i % 5 == 0) {
      print("Buzz");
    } else {
      print(i);
    }
  }
}

main() {
  fizzbuzz(15);
}
```

```tcl
proc fizzbuzz {n {m1 3} {m2 5}} {
    for {set i 1} {$i <= $n} {incr i} {
        set ret ""
        if {$i % $m1 == 0} {append ret Fizz}
        if {$i % $m2 == 0} {append ret Buzz}
        puts [expr {$ret eq "" ? $i : $ret}]
    }
}

fizzbuzz 15
```

```awk
BEGIN {
    run(15)
}

function run(n) {
    for(i = 1; i <= n; i++) {
        print fizzbuzz(i)
    }
}

function fizzbuzz(i) {
    if(i % 15 == 0) return "FizzBuzz"
    else if(i % 3 == 0) return "Fizz"
    else if(i % 5 == 0) return "Buzz"
    else return i
}
```

```typescript
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(15);
```

```boo
def fizzbuzz(n):
  for i in range(1, n):
    if i % 15 == 0:
      print("FizzBuzz")
    elif i % 3 == 0:
      print("Fizz")
    elif i % 5 == 0:
      print("Buzz")
    else:
      print(i)

fizzbuzz(16)
```

```11l
L(i) 1..15
  I i % 15 == 0
    print(‘FizzBuzz’)
  E I i % 3 == 0
    print(‘Fizz’)
  E I i % 5 == 0
    print(‘Buzz’)
  E
    print(i)
```

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. FIZZBUZZ.

       ENVIRONMENT DIVISION.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       77 COUNTER PIC 9(3).

       PROCEDURE DIVISION.
           PERFORM FIZZ-BUZZ
           STOP RUN.

       FIZZ-BUZZ SECTION.
           MOVE 1 TO COUNTER.
           PERFORM UNTIL COUNTER > 15
               IF FUNCTION MOD(COUNTER, 15) = 0 THEN
                   DISPLAY "FizzBuzz" UPON CONSOLE
               ELSE IF FUNCTION MOD(COUNTER, 3) = 0 THEN
                   DISPLAY "Fizz" UPON CONSOLE
               ELSE IF FUNCTION MOD(COUNTER, 5) = 0 THEN
                   DISPLAY "Buzz" UPON CONSOLE
               ELSE
                   DISPLAY COUNTER UPON CONSOLE
               END-IF
               END-IF
               END-IF
               ADD 1 TO COUNTER
           END-PERFORM.
       FIZZ-BUZZ-EXIT.
```

```ruby
def fizzbuzz(n)
  i = 1
  while i <= n
    if i % 15 == 0
      puts "FizzBuzz"
    elsif i % 3 == 0
      puts "Fizz"
    elsif i % 5 == 0
      puts "Buzz"
    else
      puts i
    end
    i += 1
  end
end

fizzbuzz 15
```

```octave
#! octave-interpreter-name -qf
# a fizzbuzz Octave program

function fizzbuzz(i)
  if(rem(i, 15) == 0)
    disp("FizzBuzz")
  elseif(rem(i, 3) == 0)
    disp("Fizz")
  elseif(rem(i, 5) == 0)
    disp("Buzz")
  else
    printf("%d\n", i)
  end
end

function run(n)
  for i = i:n
    fizzbuzz(i)
  endfor
end

run(15)
```

```ocaml
let fizzbuzz i =
  match i mod 3, i mod 5 with
    0, 0 -> "FizzBuzz"
  | 0, _ -> "Fizz"
  | _, 0 -> "Buzz"
  | _    -> string_of_int i;;

let run n =
  for i = 1 to n do print_endline (fizzbuzz i) done;;

run 15;;
```

```r
run <- function(n) {
  for(i in 1:n) {
    if (i %% 15 == 0) {
      print("FizzBuzz")
    } else if (i %% 3 == 0) {
      print("Fizz")
    } else if (i %% 5 == 0) {
      print("Buzz")
    } else {
      print(i)
    }
  }
}

run(15)
```

[*Home*](https://fireflower0.github.io/react-gh-pages-lisp/index.html)
