　∧ ∧  
(,,ﾟДﾟ)「`fireflower0`です、よろしく」

　∧ ∧  
(,,ﾟДﾟ)「今日はCommon Lispで開発するための最低限の環境を構築する」

## Roswellをインストールする

　∧ ∧  
(,,ﾟДﾟ)「まずは[Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux)で[Roswell](https://github.com/roswell/roswell)をインストールする」

```shell
$ brew install roswell
```

　∧ ∧  
(,,ﾟДﾟ)「正常にインストールできたら`Roswell`をセットアップする」

```shell
$ ros setup
```

　∧ ∧  
(,,ﾟДﾟ)「セットアップするとSBCL(Steel Bank Common Lisp)がインストールされるのでバージョンを確認する」

```shell
$ ros run -- --version
```

　∧ ∧  
(,,ﾟДﾟ)「`Roswell`でインストールしたソフトウェアを使えるようにするために`~/.bashrc`にパスを追加する」

```bash
$ echo export PATH='$PATH:~/.roswell/bin' >> ~/.bashrc
$ source ~/.bashrc
```

## REPL（Read-Eval-Print Loop）を起動する

　∧ ∧  
(,,ﾟДﾟ)「REPLを起動する」

```shell
$ ros run
```

　∧ ∧  
(,,ﾟДﾟ)「`Hello, world!`を表示してみる」

```lisp
(print "Hello, world!")
```

* [print (Common Lisp HyperSpec)](http://www.lispworks.com/documentation/HyperSpec/Body/f_wr_pr.htm#print)

## [Lem](https://github.com/cxxxr/lem)を使う

　∧ ∧  
(,,ﾟДﾟ)「`Lem`はCommon Lispで作られたエディタだ」

　∧ ∧  
(,,ﾟДﾟ)「`Roswell`でインストールできる」

```shell
$ ros install cxxxr/lem
```

　∧ ∧  
(,,ﾟДﾟ)「ファイルを指定して`Lem`を起動する」

```shell
$ lem [filename]
```

　∧ ∧  
(,,ﾟДﾟ)「Lemについて詳しく知りたい場合は[Survival Common Lisp - 現代Lisperたちの生存プログラミング術](https://booth.pm/ja/items/1300098)の第2章と第7章を参照だ」

　　∧∧  
　 ( ﾟДﾟ)「今日はここまで、お疲れ様でした」  
　 / つつ  
～(＿＿)  
