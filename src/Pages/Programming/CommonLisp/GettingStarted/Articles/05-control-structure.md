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
(,,ﾟДﾟ)「2方向条件分岐するには[if](http://www.lispworks.com/documentation/HyperSpec/Body/s_if.htm)を使う」

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

### 1方向条件分岐 (when, unless)

　∧ ∧  
(,,ﾟДﾟ)「1方向条件分岐には[when/unless](http://www.lispworks.com/documentation/HyperSpec/Body/m_when_.htm)を使う」

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

### 多方向分岐 (cond, case)

　∧ ∧  
(,,ﾟДﾟ)「多方向分岐には[cond](http://www.lispworks.com/documentation/HyperSpec/Body/m_cond.htm)/[case](http://www.lispworks.com/documentation/HyperSpec/Body/m_case_.htm)を使う」

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

```lisp
(let ((a 1))
  (case a
    (0 (format t "a = 0"))
    (1 (format t "a = 1"))
    (t (format t "a = other"))))
; a = 1
;=> NIL
```

## 繰り返し

### do

　∧ ∧  
(,,ﾟДﾟ)「[do](http://www.lispworks.com/documentation/HyperSpec/Body/m_do_do.htm)」

```lisp
(do ((変数 初期値 変数更新)
     (変数 初期値 変数更新)
     ・・・
     (変数 初期値 変数更新))
    (終了条件 戻り値)
  式)
```

```
(do ((a  0 (+ a 1))
     (b 10 (- b 1)))
    ((= a b) a)
  (format t "a=~d b=~d~%" a b))
; a=0 b=10
; a=1 b=9
; a=2 b=8
; a=3 b=7
; a=4 b=6
;=> 5
```

### dotimes

　∧ ∧  
(,,ﾟДﾟ)「[dotimes](http://www.lispworks.com/documentation/HyperSpec/Body/m_dotime.htm)」

```lisp
(dotimes (n 繰り返し回数)
  式)
```

```lisp
(dotimes (n 3)
  (format t "n=~d~%" n))
; n=0
; n=1
; n=2
;=> NIL
```

### dolist

　∧ ∧  
(,,ﾟДﾟ)「[dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)」

```lisp
(dolist (n リスト)
  式)
```

```lisp
(dolist (n '(1 2 3))
  (format t "n=~d~%" n))
; n=1
; n=2
; n=3
;=> NIL
```

### loop

　∧ ∧  
(,,ﾟДﾟ)「[loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)」

#### 0~10まで2ステップずつカウントアップ

```lisp
(loop for n from 0 to 10 by 2
      collect n)
;=> (0 2 4 6 8 10)
```

```lisp
(loop for n upfrom 0 upto 10 by 2
      collect n)
;=> (0 2 4 6 8 10)
```

#### 10~0まで2ステップずつカウントダウン

```lisp
(loop for n downfrom 10 downto 0 by 2
      collect n)
;=> (10 8 6 4 2 0)
```

#### 0から5になるまでカウントアップ

```lisp
(loop for n from 0 below 5
      collect n)
;=> (0 1 2 3 4)
```

#### 10から5になるまでカウントダウン

```lisp
(loop for n from 10 above 5
      collect n) 
;=> (10 9 8 7 6)
```
