　∧ ∧  
(,,ﾟДﾟ)「今回は述語関数やってくよ」

## 述語関数

　∧ ∧  
(,,ﾟДﾟ)「述語関数とは真偽(`t`/`nil`)を返す関数」

### 基本的な述語関数

　∧ ∧  
(,,ﾟДﾟ)「基本的な述語関数には[eq](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm)/[eql](http://www.lispworks.com/documentation/HyperSpec/Body/f_eql.htm)/[equal](http://www.lispworks.com/documentation/HyperSpec/Body/f_equal.htm)/[equalp](http://www.lispworks.com/documentation/HyperSpec/Body/f_equalp.htm)がある」

```lisp
;;; eq

(eq 'foo 'foo)
;=> T

(eq :foo :foo)
;=> T

(eq (+ 1 2) 3)
;=> T

(eq 1.0 0)
;=> NIL

;;; eql

(eql 'foo 'foo)
;=> T

(eql :foo :foo)
;=> T

(eql (+ 1 2) 3)
;=> T

(eql 1.0 1)
;=> NIL

;;; equal

(equal 'foo 'foo)
;=> T

(equal :foo :foo)
;=> T

(equal (+ 1 2) 3)
;=> T

(equal 1.0 1)
;=> NIL

;;; equalp

(equalp 'foo 'foo)
;=> T

(equalp :foo :foo)
;=> T

(equalp (+ 1 2) 3)
;=> T

(equalp 1.0 1)
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「とまあ、色々あるが**Land of Lisp**に書いてあるように」

* シンボル同士は常に`eq`で比較
* シンボル同士の比較でなければ`equal`で比較

　∧ ∧  
(,,ﾟДﾟ)「で良いと思う」

　∧ ∧  
(,,ﾟДﾟ)「数値を比較する述語関数には[=, /=, <, >, <=, >=](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq_sle.htm)がある」

```lisp
(= 3 (+ 1 2))
;=> T

(/= 2 (+ 2 2))
;=> T

(< 4 (+ 1 5))
;=> T

(> 5 (- 6 3))
;=> T

(<= 2 (* 2 3))
;=> T

(>= 8 (/ 10 2))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「文字・文字列を比較する述語関数には[char=, char/=](http://www.lispworks.com/documentation/HyperSpec/Body/f_chareq.htm)/[string=, string/=](http://www.lispworks.com/documentation/HyperSpec/Body/f_stgeq_.htm)などがある」

```lisp
(char= #\a #\a)
;=> T

(char/= #\a #\b)
;=> T

(string= "a" "a")
;=> T

(string/= "a" "b")
;=> 0
```

### 特殊な述語関数

　∧ ∧  
(,,ﾟДﾟ)「アトムかどうか調べるには[atom](http://www.lispworks.com/documentation/HyperSpec/Body/f_atom.htm)を使う」

```lisp
(atom 1)
;=> T

(atom '(1 2 3))
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「リストかどうか調べるには[listp](http://www.lispworks.com/documentation/HyperSpec/Body/f_listp.htm)を使う」

```lisp
(listp '(1 2 3))
;=> T

(listp 1)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「シンボルかどうか調べるには[symbolp](http://www.lispworks.com/documentation/HyperSpec/Body/f_symbol.htm)を使う」

```lisp
(symbolp 'a)
;=> T

(symbolp 1)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「数かどうか調べるには[numberp](http://www.lispworks.com/documentation/HyperSpec/Body/f_nump.htm)を使う」

```lisp
(numberp 1)
;=> T

(numberp 'a)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「偶数かどうか調べるには[evenp](http://www.lispworks.com/documentation/HyperSpec/Body/f_evenpc.htm)を、奇数かどうか調べるには[oddp](http://www.lispworks.com/documentation/HyperSpec/Body/f_evenpc.htm)を使う」

```lisp
(evenp 2)
;=> T

(oddp 3)
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「空リストかどうか調べるには[null](http://www.lispworks.com/documentation/HyperSpec/Body/f_null.htm)/[endp](http://www.lispworks.com/documentation/HyperSpec/Body/f_endp.htm)を使う」

```lisp
(null nil)
;=> T

(null 1)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「コンスセルかどうか調べるには[consp](http://www.lispworks.com/documentation/HyperSpec/Body/f_consp.htm)を使う」

```lisp
(consp '(1 . 2))
;=> T

(consp '(1 2 3))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「配列・ベクタかどうか調べるには[arrayp](http://www.lispworks.com/documentation/HyperSpec/Body/f_arrayp.htm)/[vectorp](http://www.lispworks.com/documentation/HyperSpec/Body/f_vecp.htm)を使う」

```lisp
(arrayp #(1 2))
;=> T

(vectorp #(1 2 3))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「関数かどうか調べるには[functionp](http://www.lispworks.com/documentation/HyperSpec/Body/f_fnp.htm)を使う」

```lisp
(functionp #'cons)
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「[hash-table-p](http://www.lispworks.com/documentation/HyperSpec/Body/f_hash_t.htm)を使う」

```lisp
(let ((ht (make-hash-table)))
  (hash-table-p ht))
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「文字かどうか調べるには[characterp](http://www.lispworks.com/documentation/HyperSpec/Body/f_chp.htm)を使う」

```lisp
(characterp #\a)
;=> T
```

　∧ ∧  
(,,ﾟДﾟ)「文字列かどうか調べるには[stringp](http://www.lispworks.com/documentation/HyperSpec/Body/f_stgp.htm)を使う」

```lisp
(stringp "Hello, world!")
;=> T
```

## 論理演算子

### 否定 (not)

```lisp
(not t)
;=> NIL

(not nil)
;=> T
```

### 論理和 (or)

```lisp
(or (< 3 2)
    (> 3 2))
;=> T
```

### 論理積 (and)

```lisp
(and (< 3 2)
     (> 3 2))
;=> NIL

(and (< 2 3)
     (> 3 2))
;=> T
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)
