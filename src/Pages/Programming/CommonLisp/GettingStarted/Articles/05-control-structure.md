　∧ ∧  
(,,ﾟДﾟ)「おっす〜、今日もよろしく〜」

　∧ ∧  
(,,ﾟДﾟ)「今回は条件分岐と繰り返しをやってくよ」

## 比較述語関数

　∧ ∧  
(,,ﾟДﾟ)「述語関数は真偽(`t`/`nil`)を返す関数」

　∧ ∧  
(,,ﾟДﾟ)「アトムかどうか調べるには[atom](http://www.lispworks.com/documentation/HyperSpec/Body/f_atom.htm)を使う」

　∧ ∧  
(,,ﾟДﾟ)「リストかどうか調べるには[listp](http://www.lispworks.com/documentation/HyperSpec/Body/f_listp.htm)を使う」

　∧ ∧  
(,,ﾟДﾟ)「シンボルかどうか調べるには[symbolp](http://www.lispworks.com/documentation/HyperSpec/Body/f_symbol.htm)を使う」

　∧ ∧  
(,,ﾟДﾟ)「数かどうか調べるには[numberp](http://www.lispworks.com/documentation/HyperSpec/Body/f_nump.htm)を使う」

　∧ ∧  
(,,ﾟДﾟ)「空リストかどうか調べるには[null](http://www.lispworks.com/documentation/HyperSpec/Body/f_null.htm)/[endp](http://www.lispworks.com/documentation/HyperSpec/Body/f_endp.htm)を使う」

### 基本的な比較述語関数

　∧ ∧  
(,,ﾟДﾟ)「基本的な述語関数には[eq](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm)/[eql](http://www.lispworks.com/documentation/HyperSpec/Body/f_eql.htm)/[equal](http://www.lispworks.com/documentation/HyperSpec/Body/f_equal.htm)/[equalp](http://www.lispworks.com/documentation/HyperSpec/Body/f_equalp.htm)がある」

　∧ ∧  
(,,ﾟДﾟ)「`eq`/`eql`/`equal`/`equalp`の詳細は以下を参照」

### 数値を比較する述語関数

　∧ ∧  
(,,ﾟДﾟ)「数値を比較する述語関数には[=, /=, <, >, <=, >=](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq_sle.htm)がある」

### 文字・文字列を比較する述語関数

　∧ ∧  
(,,ﾟДﾟ)「文字・文字列を比較する述語関数には[char=, char/=](http://www.lispworks.com/documentation/HyperSpec/Body/f_chareq.htm)/[string=, string/=](http://www.lispworks.com/documentation/HyperSpec/Body/f_stgeq_.htm)などがある」

## 条件分岐

### 2方向条件分岐 (if)

　∧ ∧  
(,,ﾟДﾟ)「構文は以下のようになっている」

```lisp
(if 条件式 [then] [else])
```

　∧ ∧  
(,,ﾟДﾟ)「実例としては以下のような感じ」

```lisp
(let ((a 0))
  (if (< a 0)
      (format t "negative : ~a~%" a)
      (format t "positive : ~a~%" a)))
; positive : 0
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`if`の詳細は以下を参照」

* [if (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/s_if.htm)

### 1方向条件分岐 (when, unless)


```lisp
(let ((a 0))
  (when (= a 0)
    (format t "a = 0")))
; a = 0
;=> NIL
```

```lisp
(let ((a 0))
  (unless (/= a 0)
    (format t "a = 0")))
; a = 0
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`when`/`unless`の詳細は以下を参照」

* [when/unless (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/m_when_.htm)

### 多方向分岐 (cond, case)

```lisp
(let ((a 1))
  (cond ((= a 0)
         (format t "a = 0"))
        ((= a 1)
         (format t "a = 1"))
        (t
         (format t "a = other")))
; a = 1
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`cond`の詳細は以下を参照」

* [cond (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/m_cond.htm)

```lisp
(let ((a 1))
  (case a
    (0 (format t "a = 0"))
    (1 (format t "a = 1"))
    (t (format t "a = other"))))
; a = 1
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`case`の詳細は以下を参照」

* [case (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/m_case_.htm)

## 繰り返し

　∧ ∧  
(,,ﾟДﾟ)「``の詳細は以下を参照」

* [ (Common Lisp HyperSpec)]()

　∧ ∧  
(,,ﾟДﾟ)「``の詳細は以下を参照」

* [ (Common Lisp HyperSpec)]()

　∧ ∧  
(,,ﾟДﾟ)「``の詳細は以下を参照」

* [ (Common Lisp HyperSpec)]()
