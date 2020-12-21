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

[*Home*](https://fireflower0.github.io/react-gh-pages-lisp/index.html)
