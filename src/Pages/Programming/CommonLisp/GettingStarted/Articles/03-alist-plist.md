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
(,,ﾟДﾟ)「`acons`という便利な連想リスト専用の関数もある」

```lisp
(acons 'qux 4 '((foo . 1) (bar . 2) (baz . 3)))
;=> ((QUX . 4) (FOO . 1) (BAR . 2) (BAZ . 3))
```

　∧ ∧  
(,,ﾟДﾟ)「`acons`の詳細は以下を参照」

[acons (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_acons.htm)

### 連想リストの参照

　∧ ∧  
(,,ﾟДﾟ)「キーで検索して参照するには`assoc`を使う」

```lisp
(assoc 'foo '((foo . 1) (bar . 2) (baz . 3)))
;=> (FOO . 1)
```

　∧ ∧  
(,,ﾟДﾟ)「`assoc`の詳細は以下を参照」

[assoc (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_assocc.htm)

　∧ ∧  
(,,ﾟДﾟ)「値で検索して参照するには`rassoc`を使う」

```lisp
(rassoc 1 '((foo . 1) (bar . 2) (baz . 3)))
;=> (FOO . 1)
```

　∧ ∧  
(,,ﾟДﾟ)「`rassoc`の詳細は以下を参照」

[rassoc (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rassoc.htm)

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
(,,ﾟДﾟ)「属性リストから値を取得するには`getf`を使う」

```lisp
(getf '(foo 1 bar 2 baz 3) 'foo)
;=> 1
```

　∧ ∧  
(,,ﾟДﾟ)「`getf`の詳細は以下を参照」

[getf (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_getf.htm)

　　∧ ∧  
　 (,, ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ旦  
～(＿＿)  
