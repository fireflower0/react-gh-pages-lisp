　∧ ∧  
(,,ﾟДﾟ)「おっす〜、今日もよろしく〜」

　∧ ∧  
(,,ﾟДﾟ)「今回は条件分岐と繰り返しをやってくよ」

## 比較述語関数

　∧ ∧  
(,,ﾟДﾟ)「述語関数は真偽(`t`/`nil`)を返す関数」

　∧ ∧  
(,,ﾟДﾟ)「基本的な述語関数には`eq`/`eql`/`equal`/`equalp`がある」

　∧ ∧  
(,,ﾟДﾟ)「`eq`/`eql`/`equal`/`equalp`の詳細は以下を参照」

* [eq (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm)
* [eql (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_eql.htm)
* [equal (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_equal.htm)
* [equalp (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_equalp.htm)

## 数値を比較する述語関数

　∧ ∧  
(,,ﾟДﾟ)「数値を比較する述語関数には`=, /=, <, >, <=, >=`がある」

　∧ ∧  
(,,ﾟДﾟ)「`=`は以下のように使う、2値以上の比較もできる」

```lisp
(= 0 0)
;=> T

(= 0 1)
;=> NIL

(= 0 0 0)
;=> T

(= 0 1 2)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`/=`は以下のように使う、2値以上の比較もできる」

```lisp
(/= 0 1)
;=> T

(/= 0 0)
;=> NIL

(/= 0 1 2)
;=> T

(/= 0 1 0)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`<`は以下のように使う、2値以上の比較もできる」

```lisp
(< 1 2)
;=> T

(< 2 1)
;=> NIL

(< 1 2 3)
;=> T

(< 2 1 3)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`<=`は以下のように使う、2値以上の比較もできる」

```lisp
(<= 1 2)
;=> T

(<= 0 0)
;=> T

(<= 2 1)
;=> NIL

(<= 1 2 3)
;=> T

(<= 0 0 0)
;=> T

(<= 1 3 2)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`>`は以下のように使う、2値以上の比較もできる」

```lisp
(> 2 1)
;=> T

(> 1 2)
;=> NIL

(> 3 2 1)
;=> T

(> 3 1 2)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`>=`は以下のように使う、2値以上の比較もできる」

```lisp
(>= 2 1)
;=> T

(>= 0 0)
;=> T

(>= 1 2)
;=> NIL

(>= 3 2 1)
;=> T

(>= 0 0 0)
;=> T

(>= 2 1 3)
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「数値を比較する述語関数の詳細は以下を参照」

* [=, /=, <, >, <=, >= (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq_sle.htm)

## 条件分岐

### 2方向条件分岐 (if)

　∧ ∧  
(,,ﾟДﾟ)「条件分岐といえば`if`文」

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

(let ((a -1))
  (if (< a 0)
      (format t "negative : ~a~%" a)
      (format t "positive : ~a~%" a)))
; negative : -1
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

　∧ ∧  
(,,ﾟДﾟ)「``の詳細は以下を参照」

* [ (Common Lisp HyperSpec)]()

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
