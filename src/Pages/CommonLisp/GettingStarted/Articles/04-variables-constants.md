　∧ ∧  
(,,ﾟДﾟ)「こんちゃ〜今回は変数と定数についてやっていくよ」

## グローバルな変数と定数を定義する

### 変数を定義する

　∧ ∧  
(,,ﾟДﾟ)「Common Lispではグローバル変数はスペシャル変数またはダイナミック変数と呼ぶ」

　∧ ∧  
(,,ﾟДﾟ)「スペシャル変数を定義するには[defvar](http://www.lispworks.com/documentation/HyperSpec/Body/m_defpar.htm)/[defparameter](http://www.lispworks.com/documentation/HyperSpec/Body/m_defpar.htm)を使う」

```lisp
(defvar *foo* 1)
;=> *FOO*

*foo*
;=> 1

(defparameter *bar* 5)
;=> *BAR*

*bar*
;=> 5
```

　∧ ∧  
(,,ﾟДﾟ)「スペシャル変数には慣例として変数名の両端に`* (アスタリスク)`をつける」

　∧ ∧  
(,,ﾟДﾟ)「`defvar`と`defparameter`の違いは初期値が必要かどうか」

　∧ ∧  
(,,ﾟДﾟ)「`defvar`は初期値を設定しなくても宣言できるが、`defparameter`は初期値を設定しなければならない」

```lisp
;; 初期値なしで*bar*を宣言
(defvar *bar*)
;=> *BAR*

;; そのまま使うと"変数*BAR*はバインドされてないよ"と怒られる
*bar*
;=> Error "The variable *BAR* is unbound."

;; 変数に値を代入する関数setfを使って*bar*に2を代入する
(setf *bar* 2)
;=> 2

;; *bar*に2が入っている
*bar*
;=> 2
```

### 変数に値を代入する

　∧ ∧  
(,,ﾟДﾟ)「変数の中身を変えたい場合は[setf](http://www.lispworks.com/documentation/HyperSpec/Body/m_setf_.htm)を使う」

```lisp
(setf *foo* 2)
;=> 2

*foo*
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「複数の変数に同時に値を代入することもできる」

```lisp
(setf *foo* 1
      *bar* 2)
;=> 2

*foo*
;=> 1

*bar*
;=> 2
```

### 定数を定義する

　∧ ∧  
(,,ﾟДﾟ)「定数を定義するには[defconstant](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcon.htm)を使用します」

```lisp
(defconstant +foo+ 1)
;=> +FOO+

+foo+
;=> 1
```

　∧ ∧  
(,,ﾟДﾟ)「定数には慣例として変数名の両端に`+ (プラス)`をつける」

## ローカルな変数を定義する

　∧ ∧  
(,,ﾟДﾟ)「Common Lispではローカル変数をレキシカル変数と呼ぶ」

　∧ ∧  
(,,ﾟДﾟ)「レキシカル変数を定義するには[let/let*](http://www.lispworks.com/documentation/HyperSpec/Body/s_let_l.htm)を使用する」

```lisp
(let ((foo 1)
      (bar 2))
  (print foo)
  (print bar))
; 1
; 2 
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「`let*`を使用すると手前で定義した変数を次の定義で使用できる」

```lisp
(let* ((foo 1)
       (bar foo))
  (print foo)
  (print bar))
; 1 
; 1 
;=> 1
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)  
