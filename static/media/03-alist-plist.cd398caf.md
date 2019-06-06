　∧ ∧  
(,,ﾟДﾟ)「やあ、fireflower0だよ」

　∧ ∧  
(,,ﾟДﾟ)「今日は連想リストと属性リストをやっていくよ」

## 連想リスト

　∧ ∧  
(,,ﾟДﾟ)「連想リストはコンスセルをリストにしたものだ」

　∧ ∧  
(,,ﾟДﾟ)「ハッシュテーブルを使うほどでもない場合に、簡単なテーブルとして使われる」

　∧ ∧  
(,,ﾟДﾟ)「コンスセルの`car`部がキーで`cdr`部が値となる」

### 連想リストを作る

　∧ ∧  
(,,ﾟДﾟ)「連想リストはコンスセルをリスト化することで作れる」

```lisp
'((foo . 1) (bar . 2) (baz . 3))
;=> ((FOO . 1) (BAR . 2) (BAZ . 3))
```

### 連想リストに要素を追加する

　∧ ∧  
(,,ﾟДﾟ)「連想リストに要素を追加するには`cons`が使える」

```lisp
(cons '(qux . 4) '((foo . 1) (bar . 2) (baz . 3)))
;=> ((QUX . 4) (FOO . 1) (BAR . 2) (BAZ . 3))
```

　∧ ∧  
(,,ﾟДﾟ)「[acons](http://www.lispworks.com/documentation/HyperSpec/Body/f_acons.htm)という便利な連想リスト専用の関数もある」

```lisp
(acons 'qux 4 '((foo . 1) (bar . 2) (baz . 3)))
;=> ((QUX . 4) (FOO . 1) (BAR . 2) (BAZ . 3))
```

### 連想リストの参照

　∧ ∧  
(,,ﾟДﾟ)「キーで検索して参照するには[assoc](http://www.lispworks.com/documentation/HyperSpec/Body/f_assocc.htm)を使う」

```lisp
(assoc 'foo '((foo . 1) (bar . 2) (baz . 3)))
;=> (FOO . 1)
```

　∧ ∧  
(,,ﾟДﾟ)「値で検索して参照するには[rassoc](http://www.lispworks.com/documentation/HyperSpec/Body/f_rassoc.htm)を使う」

```lisp
(rassoc 1 '((foo . 1) (bar . 2) (baz . 3)))
;=> (FOO . 1)
```

## 属性リスト

　∧ ∧  
(,,ﾟДﾟ)「属性リストはキーと値が順番に並んだリストだ」

### 属性リストを作る

　∧ ∧  
(,,ﾟДﾟ)「属性リストは普通にキーと値を順番に並べてリストを作るだけ」

```lisp
'(foo 1 bar 2 baz 3)
;=> (FOO 1 BAR 2 BAZ 3)
```

### 属性リストから値を取得する

　∧ ∧  
(,,ﾟДﾟ)「属性リストから値を取得するには[getf](http://www.lispworks.com/documentation/HyperSpec/Body/f_getf.htm)を使う」

```lisp
(getf '(foo 1 bar 2 baz 3) 'foo)
;=> 1
```

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)  
