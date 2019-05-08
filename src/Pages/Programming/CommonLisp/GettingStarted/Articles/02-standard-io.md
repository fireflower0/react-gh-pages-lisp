標準入力（キーボードからの入力）、標準出力（コンソール画面への出力）について、説明します。  

# 標準入力

標準入力には`read`、`read-char`、`read-line`が使用できます。

## read

Lispのデータを読み込みます

[read-char (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rd_rd.htm)

## read-char

入力を文字として読み込みます

[read-char (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rd_cha.htm)

## read-line

入力を文字列として読み込みます

[read-line (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_rd_lin.htm)

# 標準出力

標準出力には`print`、`prin1`、`princ`、`format`が使用できます。

## print/prin1

シンプルな出力関数、標準出力へ文字列を出力します。

[print, prin1 (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_wr_pr.htm)

## format

第1引数に`t`を指定することで標準出力へ書き出します。  
第1引数に`nil`を指定すると文字列を返します。

[format (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_format.htm)  
[独学 Common Lisp 第22章「出力」(format)](https://lisp.satoshiweb.net/2018/01/printer.html)
