彡(ﾟ)(ﾟ)「ワイがCommon Lispを紹介していくで」  
(´・ω・｀)「Lispってすごく古い言語でしょ？ナウいプログラミング言語紹介してよ」  
彡(ﾟ)(ﾟ)「せや、Lispは1958年に生まれた2番目に古い高級言語や」  
彡(ﾟ)(ﾟ)「でもな、Common LispはLisp方言の一つで1984年生まれで、ANSIにより標準化されたのが1994年やからそこまで古い言語というわけじゃないんやで」  
(´・ω・｀)「そうなんだ、でも僕Pythonやりた・・・」  
彡(ﾟ)(ﾟ)「グダグダ言っとらんで始めるで！」

# 開発環境構築

彡(ﾟ)(ﾟ)「まずは開発環境を構築していこか」  
彡(>)(<)「[Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux)で[Roswell](https://github.com/roswell/roswell)をインストールするんや！」

```shell
$ brew install roswell
```

彡(>)(<)「インストールが終わったらセットアップや！」

```shell
$ ros setup
```

彡(>)(<)「SBCL(Steel Bank Common Lisp)ちゅうCommon Lispが使えるようになっとるはずやからバージョンを確認するんや！」

```shell
$ ros run -- --version
```

彡(ﾟ)(ﾟ)「環境構築したら次はHello, world!や！」  
(´・ω・｀)「定番だね」  
彡(>)(<)「さあ、REPL（Read-Eval-Print Loop）を起動するんや！」

```shell
$ ros run
```

彡(>)(<)「Hello, world!を表示するんや！」

```lisp
(format t "Hello, world!~%")
; Hello, world!
```

(´・ω・｀)「後ろについてる`~%`は何なの？」  
彡(ﾟ)(ﾟ)「改行や、C言語でいう`\n`と同じやな」  
(´・ω・｀)「そうなんだ、じゃあ`%d`とか`%s`みたいなのもあるの？」  
彡(ﾟ)(ﾟ)「似たようなのあるで、以下のように使うんやで」

```lisp
;; 10進数
(format t "~d~%" 10)
; 10

;; 16進数
(format t "~x~%" 10)
; A

;; 8進数
(format t "~o~%" 10)
; 12

;; 2進数
(format t "~b~%" 10)
; 1010

;; 小数
(format t "~f~%" 10)
; 10.0

;; 文字列
(format t "~a~%" "Hello")
; Hello
```

(´・ω・｀)「C言語の`printf`みたいだね」  
(´・ω・｀)「`format`の後にある`t`は何なの？」  
彡(ﾟ)(ﾟ)「Common Lispでの`t`は`true`で、`nil`は`false`や」  
彡(ﾟ)(ﾟ)「`format`の第1引数に`t`を指定するとコンソールに標準出力するんや」  
(´・ω・｀)「へえ、じゃあ`nil`を指定するとどうなるの？」  
彡(ﾟ)(ﾟ)「文字列として値が返ってくるんやで」  
彡(ﾟ)(ﾟ)「`format`についてもっと詳しく知りたいなら以下を読むといいやで」

* [format (HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_format.htm)
* [Common Lispのformat関数](http://super.para.media.kyoto-u.ac.jp/~tasuku/format-func.html)
* [標準入出力 (逆引き Common Lisp クックブック)](https://lisphub.jp/common-lisp/cookbook/index.cgi?%E6%A8%99%E6%BA%96%E5%85%A5%E5%87%BA%E5%8A%9B)
* [ファイル入出力 (xyzzy Lisp Programming Common Lisp 入門)](http://www.nct9.ne.jp/m_hiroi/xyzzy_lisp/abclisp07.html)
* [独学 Common Lisp 第22章「出力」(format)](https://lisp.satoshiweb.net/2018/01/printer.html)

彡(ﾟ)(ﾟ)「今回はここまでや、ほなまた」
