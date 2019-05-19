　∧ ∧  
(,,ﾟДﾟ)「どうも`fireflower0`です、今日もよろしく」

　∧ ∧  
(,,ﾟДﾟ)「今回は**アトム**と**コンスセル**と**リスト**についてやっていく」

## アトム

　∧ ∧  
(,,ﾟДﾟ)「Common Lispではリストではないデータ（例えば"数値"、"文字"、"文字列"、"シンボル"、"nil"）はアトムと言う」

## コンスセル

「いいか、みんな」  
　　　　　　　∧ ∧  
　　　　　 　( ﾟдﾟ)  
　　　　　　(|　y |)  

「これらは単なる**アトム**だが」  
　　　　　∧ ∧  
　　　1　( ﾟдﾟ)　　2  
　　　＼／|　y |＼／  

「二つ合わされば**コンスセル**となる」  
　　　　　 ∧ ∧  
　　　　　( ﾟдﾟ)　 (1 . 2)  
　　　　　(＼／＼／  

```lisp
(cons 1 2)
;=> (1 . 2)
```

　∧ ∧  
(,,ﾟДﾟ)「`cons`の詳細は以下を参照」

* [cons (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_cons.htm)

　∧ ∧  
(,,ﾟДﾟ)「**ドット対**とも呼ばれる」

　∧ ∧  
(,,ﾟДﾟ)「手前のスロットはCAR部と呼ばれ`car`で値を取得でき」

```lisp
(car (cons 1 2))
;=> 1
```

　∧ ∧  
(,,ﾟДﾟ)「`car`関数の詳細は以下を参照」

* [car (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_car_c.htm#car)

　∧ ∧  
(,,ﾟДﾟ)「後ろのスロットはCDR部と呼ばれ`cdr`で値を取得できる」

```lisp
(cdr (cons 1 2))
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「`cdr`の詳細は以下を参照」

* [cdr (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_car_c.htm#cdr)

　∧ ∧  
(,,ﾟДﾟ)「以下のような箱をイメージするとわかりやすい」

```
 CAR CDR
+---+---+
| 1 | 2 |
+---+---+
```

　∧ ∧  
(,,ﾟДﾟ)「CDR部は別の**コンス**への参照を保持するためにも使われる」

　∧ ∧  
(,,ﾟДﾟ)「なので、CDR部で`cons`を使うことで**リスト**を作成できる」

```lisp
(cons 1 (cons 2 nil))
;=> (1 2)
```

　∧ ∧  
(,,ﾟДﾟ)「以下のような箱をイメージするとわかりやすい」

```
 CAR CDR     CAR  CDR
+---+---+   +---+-----+
| 1 |  +--->| 2 | nil |
+---+---+   +---+-----+
```

　∧ ∧  
(,,ﾟДﾟ)「ここから2を取り出すには`car`と`cdr`を組み合わせる」

```lisp
(car (cdr (cons 1 (cons 2 nil))))
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「ちなみに`car`と`cdr`を合体した`cadr`というのもある」

```lisp
(cadr (cons 1 (cons 2 nil)))
;=> 2
```

## リスト

### リストを作成する

　∧ ∧  
(,,ﾟДﾟ)「リストを作るには`cons`以外に`list`/`quote`/`シングルクォート`/`バッククォート`が使える」

```
(list 1 2 3)
;=> (1 2 3)

(quote (1 2 3))
;=> (1 2 3)

'(1 2 3)
;=> (1 2 3)

`(1 2 3)
;=> (1 2 3)
```

　∧ ∧  
(,,ﾟДﾟ)「`list`/`quote`の詳細は以下を参照」

* [list (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_list_.htm)
* [quote (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/s_quote.htm#quote)

　∧ ∧  
(,,ﾟДﾟ)「`シングルクォート`と`バッククォート`の違いはリスト内に式を含めることができるか」


　∧ ∧  
(,,ﾟДﾟ)「`バッククォート`を使ったリスト内で`, (コンマ)`を使うと式を評価できる」

```lisp
`(1 2 ,(+ 1 2) 4 5)
;=> (1 2 3 4 5)
```

　∧ ∧  
(,,ﾟДﾟ)「`,@ (コンマアットマーク)`を使うとリストを返す式を評価し、結果をリスト内に展開する」

```lisp
`(1 2 ,@(list 3 4 5) 6 7 8)
;=> (1 2 3 4 5 6 7 8)
```

### リストから要素を取得する

　∧ ∧  
(,,ﾟДﾟ)「リストからは、`car`/`cdr`で要素を取得できる」

```lisp
(car '(1 2 3))
;=> 1

(cdr '(1 2 3))
;=> (2 3)
```

　∧ ∧  
(,,ﾟДﾟ)「が、最近では`first`や`second`や`third`などの方が推奨されている」

```lisp
(first '(1 2 3))
;=> 1

(second '(1 2 3))
;=> 2

(third '(1 2 3))
;=> 3
```

　∧ ∧  
(,,ﾟДﾟ)「`first`/`second`/`third`などの詳細は以下を参照」

* [first/second/thirdなど (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_firstc.htm)

　∧ ∧  
(,,ﾟДﾟ)「他にも、`nth`や`elt`でも要素を取得できる」

```lisp
(nth 1 '(1 2 3))
;=> 2

(elt '(1 2 3) 1)
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「`elt`は`nth`よりも低速だからリストでは`nth`を使う方が良い」

　∧ ∧  
(,,ﾟДﾟ)「`elt`は低速だが、リスト以外でも使える」

```lisp
;; 文字列
(elt "abc" 1)
;=> #\b

;; 配列
(elt #(1 2 3) 1)
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「`nth`/`elt`の詳細は以下を参照」

* [nth (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_nth.htm)
* [elt (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_elt.htm)

### リストの要素数を取得する

　∧ ∧  
(,,ﾟДﾟ)「リストの要素数は`length`で取得できる」

```lisp
(length '(1 2 3 4 5))
;=> 5
```

　∧ ∧  
(,,ﾟДﾟ)「`length`はリスト以外でも使える」

```lisp
;; 文字列
(length "abc")
;=> 3

;; 配列
(length #(1 2 3))
;=> 3
```

　∧ ∧  
(,,ﾟДﾟ)「`length`の詳細は以下を参照」

* [length (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_length.htm)

### リストから要素を探す

　∧ ∧  
(,,ﾟДﾟ)「リストから指定した要素を探すには`find`/`member`を使用する」

```lisp
(find 2 '(1 2 3))
;=> 2

(member 2 '(1 2 3))
;=> (2 3)
```

　∧ ∧  
(,,ﾟДﾟ)「`find`は見つけた要素を、`member`は見つけた要素以降のリストを返す」

　∧ ∧  
(,,ﾟДﾟ)「見つからなかったら`find`/`member`共に`nil`を返す」

```lisp
(find 4 '(1 2 3))
;=> NIL

(member 4 '(1 2 3))
;=> NIL
```

　∧ ∧  
(,,ﾟДﾟ)「`find`はリスト以外でも使える」

```lisp
;; 文字列
(find #\b "abc")
;=> #\b

;; 配列
(find 2 #(1 2 3))
;=> 2
```

　∧ ∧  
(,,ﾟДﾟ)「`find`/`member`の詳細は以下を参照」

* [find (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_.htm)
* [member (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_mem_m.htm)

　∧ ∧  
(,,ﾟДﾟ)「述語関数を指定して要素を探す`find-if`/`find-if-not`/`member-if`/`member-if-not`というものもある」

```lisp
(find-if #'evenp '(1 2 3 4 5))
;=> 2

(find-if-not #'oddp '(1 2 3 4 5))
;=> 2

(member-if #'evenp '(1 2 3 4 5))
;=> (2 3 4 5)

(member-if-not #'minusp '(-2 -1 0 1 2))
;=> (0 1 2)
```

　∧ ∧  
(,,ﾟДﾟ)「`find-if`/`find-if-not`/`member-if`/`member-if-not`の詳細は以下を参照」

* [find-if/find-if-not (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_find_.htm)
* [member-if/member-if-not (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_mem_m.htm)

