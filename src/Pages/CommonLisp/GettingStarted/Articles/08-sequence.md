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

### シーケンスの長さを求める

　∧ ∧  
(,,ﾟДﾟ)「シーケンスの長さは[length](http://www.lispworks.com/documentation/HyperSpec/Body/f_length.htm)で求まる」

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

### シーケンスの一部を取り出す

　∧ ∧  
(,,ﾟДﾟ)「シーケンスの一部を取り出すには[subseq](http://www.lispworks.com/documentation/HyperSpec/Body/f_subseq.htm)を使う」

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

### シーケンスをコピーする

　∧ ∧  
(,,ﾟДﾟ)「引数と同じ要素を持つシーケンスを返す[copy-seq](http://www.lispworks.com/documentation/HyperSpec/Body/f_cp_seq.htm)」

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

### シーケンスの要素を指定の値で埋める

　∧ ∧  
(,,ﾟДﾟ)「[fill](http://www.lispworks.com/documentation/HyperSpec/Body/f_fill.htm)」

```lisp
(fill '(1 2 3) 1)
;=> (1 1 1)

(fill '(1 2 3 4 5 6 7 8 9) 0 :start 2 :end 5)
;=> (1 2 0 0 0 6 7 8 9)

(fill #(1 2 3) 1)
;=> #(1 1 1)

(fill #(1 2 3 4 5 6 7 8 9) 0 :start 2 :end 5)
;=> #(1 2 0 0 0 6 7 8 9)

(fill "Hello, world!" #\A :start 7 :end 12)
;=> "Hello, AAAAA!"

(fill #*0000 1)
;=> #*1111
```

### シーケンスの置換

　∧ ∧  
(,,ﾟДﾟ)「[replace](http://clhs.lisp.se/Body/f_replac.htm)」

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

### 指定したアイテムの数

　∧ ∧  
(,,ﾟДﾟ)「[count](http://clhs.lisp.se/Body/f_countc.htm)」

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

### シーケンスを反転する

　∧ ∧  
(,,ﾟДﾟ)「[reverse/nreverse](http://clhs.lisp.se/Body/f_revers.htm)」

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

### 文字列を結合する

　∧ ∧  
(,,ﾟДﾟ)「[concatenate](http://clhs.lisp.se/Body/f_concat.htm)」

```lisp
(concatenate 'list '(1 2 3) '(4 5 6))
;=> (1 2 3 4 5 6)

(concatenate 'vector #(1 2 3) #(4 5 6))
;=> #(1 2 3 4 5 6)

(concatenate 'string "Hello" " ,world!")
;=> "Hello ,world!"

(concatenate 'bit-vector #*1010 #*0101)
;=> #*10100101
```

### シーケンス要素を検索する

　∧ ∧  
(,,ﾟДﾟ)「[position](http://clhs.lisp.se/Body/f_pos_p.htm)」

```lisp
(position 3 '(1 2 3 4 5))
;=> 2

(position 4 #(1 2 3 4 5))
;=> 3

(position #\w "Hello, world!")
;=> 7

(position 1 #*00110101)
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「[find](http://clhs.lisp.se/Body/f_find_.htm)」

```lisp
(find 4 '(1 2 3 4 5))
;=> 4

(find 'bar '(foo bar baz))
;=> BAR

(find 3 #(1 2 3 4 5))
;=> 3

(find #\e "Hello, world!")
;=> #\e

(find 0 #*11100101)
;=> 0
```

### シーケンスをソートする

　∧ ∧  
(,,ﾟДﾟ)「[sort](http://clhs.lisp.se/Body/f_sort_.htm)」

```lisp
(sort '(1 2 3 4 5) #'>)
;=> (5 4 3 2 1)

(sort #(5 4 3 2 1) #'<)
;=> #(1 2 3 4 5)

(sort "ABCDEFG" #'string>)
;=> "GFEDCBA"
```

### 2つのシーケンスをマージする

　∧ ∧  
(,,ﾟДﾟ)「[merge](http://clhs.lisp.se/Body/f_merge.htm)」

```lisp
(merge 'list '(1 2 3) '(4 5 6) #'<)
;=> (1 2 3 4 5 6)

(merge 'list '(1 2 3) '(4 5 6) #'>)
;=> (4 5 6 1 2 3)

(merge 'vector #(1 2 3) #(4 5 6) #'<)
;=> #(1 2 3 4 5 6)

(merge 'vector #(1 2 3) #(4 5 6) #'>)
;=> #(4 5 6 1 2 3)

(merge 'string "Hello" "world" #'string<)
;=> "Helloworld"

(merge 'string "Hello" "world" #'string>)
;=> "worldHello"

(merge 'bit-vector #*0101 #*1010 #'<)
;=> #*01011010

(merge 'bit-vector #*0101 #*1010 #'>)
;=> #*10101010
```

### シーケンスのそれぞれの要素に関数を適用する

　∧ ∧  
(,,ﾟДﾟ)「[map](http://clhs.lisp.se/Body/f_map.htm)」

```lisp
(map 'list #'oddp '(1 2 3 4 5))
;=> (T NIL T NIL T)

(map 'vector #'evenp #(1 2 3 4 5))
;=> #(NIL T NIL T NIL)

(map 'string (lambda (x) (if (oddp x) #\1 #\0)) '(1 2 3 4 5))
;=> "10101"

(map 'bit-vector (lambda (x) (if (evenp x) 1 0)) '(1 2 3 4 5))
;=> #*01010
```

### シーケンスの要素をテストする

　∧ ∧  
(,,ﾟДﾟ)「[every/some/notany/notevery](http://clhs.lisp.se/Body/f_everyc.htm)」

　∧ ∧  
(,,ﾟДﾟ)「`some`はpredicateの呼び出しによって返される最初の非nil値を返す」

```lisp
(some #'= '(1 2 3 4 5) '(5 4 3 2 1))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「`every`は」

```lisp
(every #'evenp '(1 3 5))
;=> NIL

(every #'evenp '(2 4 6))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「`some`はpredicateを呼び出してもtrueが返されない場合に限り、trueを返す」

```lisp
(notany #'> '(1 2 3 4) '(5 6 7 8) '(9 10 11 12))
;=> T

(notany #'> '(9 10 11 12) '(5 6 7 8) '(1 2 3 4))
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`notevery`はpredicateのすべての呼び出しがtrueを返すのではない場合に限り、trueを返す」

```lisp
(notevery #'< '(9 10 11 12) '(5 6 7 8) '(1 2 3 4))
;=> T

(notevery #'< '(1 2 3 4) '(5 6 7 8) '(9 10 11 12))
;=> NIL
```

### 二項演算関数を使ってシーケンスの要素を結合

　∧ ∧  
(,,ﾟДﾟ)「[reduce](http://clhs.lisp.se/Body/f_reduce.htm)はリストの合計を求めるのに使える」

```lisp
(reduce #'+ '(1 2 3 4 5))
;=> 15

(reduce #'+ #(1 2 3 4 5))
;=> 15

(reduce #'+ #*10100101)
;=> 4
```

### シーケンスから要素を探す

　∧ ∧  
(,,ﾟДﾟ)「[search](http://clhs.lisp.se/Body/f_search.htm)」

```lisp
(search "world" "Hello, world!")
;=> 7

(search '(0 1) '(2 4 6 1 3 5) :key #'oddp)
;=> 2
```

### シーケンスから要素を削除する

　∧ ∧  
(,,ﾟДﾟ)「[remove/delete](http://clhs.lisp.se/Body/f_rm_rm.htm)」

```lisp
(defvar *list* '(1 2 3 4 5))
;=> *LIST*

*list*
;=> (1 2 3 4 5)

(remove 2 *list*)
;=> (1 3 4 5)

*list*
;=> (1 2 3 4 5)
```

```lisp
(defvar *list* '(1 2 3 4 5))
;=> *LIST*

*list*
;=> (1 2 3 4 5)

(delete 2 *list*)
;=> (1 3 4 5)

*list*
;=> (1 3 4 5)
```

### シーケンスを置換する

　∧ ∧  
(,,ﾟДﾟ)「[substitute/nsubstitute](http://clhs.lisp.se/Body/f_sbs_s.htm)」

```lisp
(defvar *str* "Hello, world!")
;=> *STR*

*str*
;=> "Hello, world!"

(substitute #\L #\l *str*)
;=> "HeLLo, worLd!"

;; 元のシーケンスには影響しない
*str*
;=> "Hello, world!"
```

```lisp
(defvar *str* "Hello, world!")
*STR*

*str*
;=> "Hello, world!"

(nsubstitute #\L #\l *str*)
;=> "HeLLo, worLd!"

;; 元のシーケンスに影響する
*str*
;=> "HeLLo, worLd!"
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)
