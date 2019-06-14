　∧ ∧  
(,,ﾟДﾟ)「シーケンス」

## シーケンス

### elt

```lisp
(elt '(1 2 3) 0)
;=> 1

(elt "Hello" 3)
;=> #\l
```

### length

```lisp
(length '(1 2 3 4 5))
;=> 5

(length "Hello, world!")
;=> 13
```

### subseq

```lisp
(subseq '(1 2 3 4 5 6 7 8 9) 2 6)
;=> (3 4 5 6)

(subseq "Hello, world!" 7 12)
;=> "world"
```

### copy-seq

　∧ ∧  
(,,ﾟДﾟ)「引数と同じ要素を持つシーケンスを返す」

```lisp
(copy-seq '(1 2 3))
;=> (1 2 3)

(copy-seq "Hello, world!")
;=> "Hello, world!"
```

### fill

```lisp
(fill '(1 2 3) 1)
;=> (1 1 1)

(fill "Hello, world!" #\A :start 7 :end 12)
;=> "Hello, AAAAA!"
```

### replace

```lisp
(replace '(1 2 3 4 5) '(3 4))
;=> (3 4 3 4 5)

(replace "Hello, world!" "Lisp!" :start1 7)
;=> "Hello, Lisp!!"
```

### count

```lisp
(count 2 '(0 1 2 2 2 3 4 5))
;=> 3

(count #\l "Hello, world!")
;=> 3
```

### reverse

```lisp
(reverse '(1 2 3 4 5))
;=> (5 4 3 2 1)

(reverse "Hello, world!")
;=> "!dlrow ,olleH"
```

### nreverse
### concatenate
### position
### find
### sort
### merge
### map
### some
### every
### notany
### notevery
### reduce
### search
### remove
### delete
### substitute
### nsubstitute
### nsubstitute
