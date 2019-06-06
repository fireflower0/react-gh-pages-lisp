　∧ ∧  
(,,ﾟДﾟ)「繰り返し、ループ」

## 繰り返し

　∧ ∧  
(,,ﾟДﾟ)「繰り返しには[do](http://www.lispworks.com/documentation/HyperSpec/Body/m_do_do.htm)を使う」

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

　∧ ∧  
(,,ﾟДﾟ)「単純なカウントアップループには[dotimes](http://www.lispworks.com/documentation/HyperSpec/Body/m_dotime.htm)が良いかも」

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

　∧ ∧  
(,,ﾟДﾟ)「リストの要素でループするなら[dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)が便利」

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

　∧ ∧  
(,,ﾟДﾟ)「高機能な[loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)マクロ」

### 計数繰り返し

```lisp
(loop for [ from / upfrom / downfrom ] 変数 [ to / upto / downto / below / above ] [ by ] ステップ数
      〜)
```

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

### コレクション内繰り返し

```lisp
(loop for 変数 [ in / on ] リスト  /  [ across ] ベクタ [ by ] ステップ関数
      〜)
```

```lisp
(loop for n in '(1 2 3 4) by #'cddr
      collect n)
;=> (1 3)
```

```lisp
(loop for n on '(1 2 3 4 5) by #'cddr
      collect n)
;=> ((1 2 3 4 5) (3 4 5) (5))
```

```lisp
(loop for n across #(1 2 3 4 5)
      collect n)
;=> (1 2 3 4 5)
```

```lisp
(loop for 変数 being the [ hash-keys / hash-values ] in ハッシュ表 using [ hash-value / hash-key ] 変数
      〜)
```

```lisp
(loop for 変数 being the [ symbols / present-symbols / external-symbols ] in パッケージ
      〜)
```

### 集約

* リストの累積
  * collect  : リスト作成
  * append   : リスト結合
  * nconc    : 破壊的にリスト結合

* 統計
  * count    : カウント
  * sum      : 加算
  * maximize : 最大値
  * minimize : 最小値

### 式の実行 (do)

```lisp
(loop for 〜
      do 式)
```

```lisp
(loop for n from 1 to 5
      do (print n))
; 1
; 2
; 3
; 4
; 5
;=> NIL
```

### 条件分岐 (if / when / unless)

```lisp
(loop for 〜
      [ if / when / unless ] 条件 〜 [ else ... ] [ end ] )
```

```lisp
(loop for x from 1 to 10
      if (evenp x)
      do (format t "Even:~A~%" x)
      else
      do (format t "Odd:~A~%" x))
; Odd:1
; Even:2
; Odd:3
; Even:4
; Odd:5
; Even:6
; Odd:7
; Even:8
; Odd:9
; Even:10
;=> NIL
```

```lisp
(loop for x from 1 to 10
      when (evenp x)
      do (format t "~A~%" x))
; 2
; 4
; 6
; 8
; 10
;=> NIL
```

```lisp
(loop for x from 1 to 10
      unless (evenp x)
      do (format t "~A~%" x))
; 1
; 3
; 5
; 7
; 9
;=> NIL
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)
