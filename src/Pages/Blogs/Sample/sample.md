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

[*Home*](https://fireflower0.github.io/react-gh-pages-lisp/index.html)
