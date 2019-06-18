　∧ ∧  
(,,ﾟДﾟ)「シーケンス」

## シーケンス

　∧ ∧  
(,,ﾟДﾟ)「シーケンスには以下のような型がある」

```
■シーケンス
＋ー■ リスト           (例) '(1 2 3)
＋ー■ ベクタ           (例) #(1 2 3)
    ＋ー■ 文字列       (例) "Hello, world!"
    ＋ー■ ビットベクタ (例) #*1010
```

### シーケンスから要素を取り出す

　∧ ∧  
(,,ﾟДﾟ)「[elt](http://www.lispworks.com/documentation/HyperSpec/Body/f_elt.htm)を使うことでシーケンスから要素を取り出すことができる」

```lisp
;; リスト
(elt '(1 2 3) 0)
;=> 1

;; ベクタ
(elt #(1 2 3) 1)
;=> 2

;; 文字列
(elt "Hello" 3)
;=> #\l

;; ビットベクタ
(elt #*1010 2)
;=> 1
```

### length

```lisp
(length '(1 2 3 4 5))
;=> 5

(length #(1 2 3 4 5))
;=> 5

(length "Hello, world!")
;=> 13

(length #*10100101)
;=> 8
```

### subseq

```lisp
(subseq '(1 2 3 4 5 6 7 8 9) 2 6)
;=> (3 4 5 6)

(subseq #(1 2 3 4 5 6 7 8 9) 2 6)
;=> #(3 4 5 6)

(subseq "Hello, world!" 7 12)
;=> "world"

(subseq #*10100101 3 8)
;=> #*00101
```

### copy-seq

　∧ ∧  
(,,ﾟДﾟ)「引数と同じ要素を持つシーケンスを返す」

```lisp
(copy-seq '(1 2 3))
;=> (1 2 3)

(copy-seq #(1 2 3))
;=> #(1 2 3)

(copy-seq "Hello, world!")
;=> "Hello, world!"

(copy-seq #*0101)
;=> #*0101
```

### fill

```lisp
(fill '(1 2 3) 1)
;=> (1 1 1)

(fill #(1 2 3) 1)
;=> #(1 1 1)

(fill "Hello, world!" #\A :start 7 :end 12)
;=> "Hello, AAAAA!"

(fill #*0000 1)
;=> #*1111
```

### replace

```lisp
(replace '(1 2 3 4 5) '(3 4))
;=> (3 4 3 4 5)

(replace #(1 2 3 4 5) '(3 4))
;=> #(3 4 3 4 5)

(replace "Hello, world!" "Lisp!" :start1 7)
;=> "Hello, Lisp!!"

(replace #*10100101 #*1111)
;=> #*11110101
```

### count

```lisp
(count 2 '(0 1 2 2 2 3 4 5))
;=> 3

(count 1 #(1 0 1 1 1 2 4 4 5 5))
;=> 4

(count #\l "Hello, world!")
;=> 3

(count 1 #*10100101)
;=> 4
```

### reverse

```lisp
(reverse '(1 2 3 4 5))
;=> (5 4 3 2 1)

(reverse #(1 2 3 4 5))
;=> #(5 4 3 2 1)

(reverse "Hello, world!")
;=> "!dlrow ,olleH"

(reverse #*0101)
;=> #*1010
```

### nreverse

　∧ ∧  
(,,ﾟДﾟ)「reverseと同じだがこっちは破壊的」

```lisp
(nreverse '(1 2 3 4 5))
;=> (5 4 3 2 1)

(nreverse #(1 2 3 4 5))
;=> #(5 4 3 2 1)

(nreverse "Hello, world!")
;=> "!dlrow ,olleH"

(nreverse #*0101)
;=> #*1010
```

### concatenate
### position
### find
### sort
### merge
### map
### some
### every

```lisp
(every #'evenp '(1 3 5))
;=> NIL

(every #'evenp '(2 4 6))
;=> T
```

### notany
### notevery
### reduce

　∧ ∧  
(,,ﾟДﾟ)「リストの合計を求めるのに使える」

```lisp
(reduce #'+ '(1 2 3 4 5))
;=> 15

(reduce #'+ #(1 2 3 4 5))
;=> 15

(reduce #'+ #*10100101)
;=> 4
```

### search
### remove
### delete
### substitute
### nsubstitute
### nsubstitute
