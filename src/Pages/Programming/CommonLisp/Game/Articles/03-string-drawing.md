文字列を描画します。

![string-drawing](https://github.com/fireflower0/react-gh-pages-lisp/blob/master/src/Pages/Programming/CommonLisp/Game/Articles/Pic/02-01-string-drawing.png?raw=true)

フォントはIPAex明朝(`ipaexm.ttf`)とIPAexゴシック(`ipaexg.ttf`)を使用しています。  
以下からダウロードできます。  
[IPAexフォント ダウンロードページ](https://ipafont.ipa.go.jp/old/ipaexfont/download.html)

ちなみに、TTF(True Type Font)はデジタルフォントの規格のことです。

# パッケージ定義

ファイルの先頭でパッケージを定義します。

```lisp
(defpackage :tutorial/02-string-drawing
  (:use :cl)
  (:import-from :sdl2)
  (:import-from :sdl2-ttf)
  (:export :main))
(in-package :tutorial/02-string-drawing)
```

今回は`sdl2-ttf`をインポートします。

# SDL2ライブラリ初期化＆終了処理

`sdl2-ttf`の初期化＆終了処理以外はウィンドウ表示と同じです。

```commonlisp
(defmacro with-window-renderer ((window renderer) &body body)
  `(sdl2:with-init (:video)
     (sdl2:with-window (,window
                        :title "ゲームタイトル"
                        :w *screen-width*
                        :h *screen-height*
                        :flags '(:shown))
       (sdl2:with-renderer (,renderer
                            ,window
                            :index -1
                            :flags '(:accelerated :presentvsync))
         (sdl2-ttf:init)
         ,@body
         (sdl2-ttf:quit)))))
```

`,@body`の前後に初期化処理`(sdl2-ttf:init)`と終了処理`(sdl2-ttf:quit)`を入れます。

## sdl2-ttf:init

sdl2-ttfを初期化します。  
sdl2-ttfが初期化されているかチェックする`(sdl2-ttf:was-init)`を除くsdl2-ttf APIを使う前に呼び出す必要があります。

```commonlisp
(sdl2-ttf:init)
```

詳細は以下を参照  
* [TTF_Init (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/TTF_Init.html)

## sdl2-ttf:quit

sdl2-ttfの終了処理です。
このAPIを読んだ後は、`(sdl2-ttf:was-init)`を除くsdl2-ttf APIを呼び出してはいけません。

```commonlisp
(sdl2-ttf:quit)
```

詳細は以下を参照  
* [TTF_Quit (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/TTF_Quit.html)

## sdl2-ttf:was-init

sdl2-ttfが初期化されているかチェックします。  
既に初期化されている場合は`1`、初期化されていない場合は`0`が返ります。

```commonlisp
(sdl2-ttf:was-init)
```

詳細は以下を参照  
* [TTF_WasInit (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/TTF_WasInit.html)

# 文字列描画関数

最初にカラー用のクラスを定義します。  
今回は文字色用に使用します。  

```commonlisp
(defclass sdl-color ()
  ((red   :initarg :red
          :initform 0
          :accessor sdl-color-red)
   (green :initarg :green
          :initform 0
          :accessor sdl-color-green)
   (blue  :initarg :blue
          :initform 0
          :accessor sdl-color-blue)
   (alpha :initarg :alpha
          :initform 0
          :accessor sdl-color-alpha)))
```

以下と同じように使用できます。  
[SDL_Color (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_Color.html)

次に文字列描画関数`print-string`を作成します。  

```commonlisp
(defun print-string (renderer font string x y color)
  (let* ((red     (sdl-color-red   color))
         (green   (sdl-color-green color))
         (blue    (sdl-color-blue  color))
         (alpha   (sdl-color-alpha color))
         (surface (sdl2-ttf:render-utf8-solid font string red green blue alpha))
         (width   (sdl2:surface-width surface))
         (height  (sdl2:surface-height surface))
         (texture (sdl2:create-texture-from-surface renderer surface)))
    (sdl2:render-copy renderer
                      texture
                      :source-rect nil
                      :dest-rect (sdl2:make-rect x y width height))))
```

## sdl2-ttf:render-utf8-solid

UTF-8でエンコードされた文字列を指定したフォントと色で新しく生成したサーフェイスにSolidモードでレンダリングします。

```lisp
(sdl2-ttf:render-utf8-solid font text red green blue alpha)
```

詳細は以下を参照  
* [TTF_RenderUTF8_Solid (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/TTF_RenderUTF8_Solid.html)

## sdl2:create-texture-from-surface

サーフェイスからテクスチャを生成します。

```lisp
(sdl2:create-texture-from-surface renderer surface)
```

詳細は以下を参照  
* [SDL_CreateTextureFromSurface (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_CreateTextureFromSurface.html)

## sdl2:render-copy

テクスチャの一部を現在のレンダーターゲットにコピーします。

```lisp
(sdl2:render-copy renderer texture &key source-rect dest-rect)
```

詳細は以下を参照  
* [SDL_RenderCopy (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderCopy.html)

# メイン関数

フォントファイルの読み込み、色の作成、文字列の描画を行います。

```commonlisp
(defun main ()
  (with-window-renderer (window renderer)
    (let ((font-ipaexg (sdl2-ttf:open-font "fonts/ipaexg.ttf" 50))
          (font-ipaexm (sdl2-ttf:open-font "fonts/ipaexm.ttf" 50))
          (red         (make-instance 'sdl-color :red #XFF))
          (green       (make-instance 'sdl-color :green #XFF))
          (blue        (make-instance 'sdl-color :blue #XFF))
          (yellow      (make-instance 'sdl-color :red #XFF :green #XFF)))
      (sdl2:with-event-loop (:method :poll)
        (:keydown (:keysym keysym)
                  (if (sdl2:scancode= (sdl2:scancode-value keysym) :scancode-escape)
                      (sdl2:push-event :quit)))
        (:idle ()
               (sdl2:set-render-draw-color renderer 0 0 0 255)
               (sdl2:render-clear renderer)
               (print-string renderer font-ipaexg "こんにちは、世界！" 70 50 red)
               (print-string renderer font-ipaexm "こんにちは、世界！" 70 110 green)
               (print-string renderer font-ipaexg "Hello, world!" 70 170 blue)
               (print-string renderer font-ipaexm "Hello, world!" 70 230 yellow)
               (sdl2:render-present renderer))
        (:quit () t)))))
```

## sdl2-ttf:open-font

フォントファイルを読み込みます。  
第1引数にフォントファイルへのパス、第2引数にサイズを指定します。  

```lisp
(sdl2-ttf:open-font path-to-font point-size)
```

詳細は以下を参照  
* [TTF_OpenFont (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/TTF_OpenFont.html)
