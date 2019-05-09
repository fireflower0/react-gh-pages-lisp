# 標準入力（キーボードからの入力）/標準出力（コンソール画面への出力）

標準入力には`read`/`read-line`、標準出力には`format`が使用できます。

```lisp
;; 10進数
(format t "~d~%" (read))
;<= 10
;=> 10

;; 16進数
(format t "~x~%" (read))
;<= 10
;=> A

;; 8進数
(format t "~o~%" (read))
;<= 10
;=> 12

;; 2進数
(format t "~b~%" (read))
;<= 10
;=> 1010
```

`~%`は改行を意味します。

```lisp
;; 文字列
(format t "~a~%" (read-line))
;<= Hello, world!
;=> Hello, world!
```

`~a`は汎用で、良い感じに表示してくれます。

* [read (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rd_rd.htm)
* [read-line (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rd_lin.htm)
* [format (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_format.htm)  
* [独学 Common Lisp 第22章「出力」(format)](https://lisp.satoshiweb.net/2018/01/printer.html)
