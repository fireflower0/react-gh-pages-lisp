　∧ ∧  
(,,ﾟДﾟ)「今回は条件分岐やってくよ」

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
