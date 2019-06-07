　∧ ∧  
(,,ﾟДﾟ)「今回は比較述語関数と条件分岐やってくよ」

## 比較述語関数

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
(,,ﾟДﾟ)「空リストかどうか調べるには[null](http://www.lispworks.com/documentation/HyperSpec/Body/f_null.htm)/[endp](http://www.lispworks.com/documentation/HyperSpec/Body/f_endp.htm)を使う」

```lisp
(null nil)
;=> T

(null 1)
;=> NIL
```

## 条件分岐

### 2方向条件分岐 (if)

　∧ ∧  
(,,ﾟДﾟ)「2方向条件分岐するには[if](http://www.lispworks.com/documentation/HyperSpec/Body/s_if.htm)を使う」


#### if

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

#### when

```lisp
(let ((a 0))
  (when (= a 0)
    (format t "a = 0")))
; a = 0
;=> NIL
```

#### unless

```lisp
(let ((a 0))
  (unless (/= a 0)
    (format t "a = 0")))
; a = 0
;=> NIL
```

### 多方向分岐 (cond, case, ecase)

　∧ ∧  
(,,ﾟДﾟ)「多方向分岐には[cond](http://www.lispworks.com/documentation/HyperSpec/Body/m_cond.htm)/[case/ecase](http://www.lispworks.com/documentation/HyperSpec/Body/m_case_.htm)を使う」

#### cond

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

#### case

```lisp
(let ((a 1))
  (case a
    (0 (format t "a = 0"))
    (1 (format t "a = 1"))
    (t (format t "a = other"))))
; a = 1
;=> NIL
```

#### ecase

```lisp
(let ((a 1))
  (ecase a
    (0 (format t "a = 0"))
    (1 (format t "a = 1"))
    (2 (format t "a = 2"))))
; a = 1
;=> NIL
```

```lisp
(let ((a 3))
  (ecase a
    (0 (format t "a = 0"))
    (1 (format t "a = 1"))
    (2 (format t "a = 2"))))

; 3 fell through ECASE expression. Wanted one of (0 1 2).
;    [Condition of type SB-KERNEL:CASE-FAILURE]
; 
; Restarts:
;  0: [RETRY] Retry SLIME REPL evaluation request.
;  1: [*ABORT] Return to SLIME's top level.
;  2: [ABORT] abort thread (#<THREAD "repl-thread" RUNNING {1001D97F93}>)
; 
; Backtrace:
;   0: ((LAMBDA ()))
;   1: (SB-INT:SIMPLE-EVAL-IN-LEXENV (LET ((A 3)) (ECASE A (0 #) (1 #) (2 #))) #<NULL-LEXENV>)
;   2: (EVAL (LET ((A 3)) (ECASE A (0 #) (1 #) (2 #))))
;  --more--
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)
