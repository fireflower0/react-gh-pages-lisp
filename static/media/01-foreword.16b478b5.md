# GUIアプリケーション

## GTK3

GTK3ライブラリを以下のコマンドでインストール

```
$ sudo apt install libgtk-3-dev
```

## GTK3デモプログラム

デモプログラムは以下のコマンドでインストール

```
$ sudo apt install gtk-3-examples
```

### GTK3 Demo

GtkWidgetのサンプルコード及び、実行結果を見ることができる。

```
$ gtk3-demo
```

### GTK3 Icon Browser

`/usr/share/icons`のアイコン画像を一覧表示する。

```
$ gtk3-icon-browser
```

### GTK3 Widget Factory

GtkWidgetの一覧表示。

```
$ gtk3-widget-factory
```

## cl-cffi-gtk

```
$ ros install crategus/cl-cffi-gtk
```

シンプルなプログラム

```lisp
(ql:quickload :cl-cffi-gtk)

(defpackage :my-gtk
  (:use :cl
        :gtk
        :gdk
        :gdk-pixbuf
        :gobject
        :glib
        :gio
        :pango
        :cairo))

(in-package :my-gtk)

(defun main ()
  (within-main-loop
   (let ((window (make-instance 'gtk-window
                                :type :toplevel
                                :title "Hello, world!"
                                :default-width  500
                                :default-height 500)))
     (g-signal-connect window "destroy"
                       (lambda (widget)
                         (declare (ignore widget))
                         (leave-gtk-main)))
     (gtk-widget-show-all window))))

(main)
```
