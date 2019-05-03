ただウィンドウを表示するだけ、Escキーでウィンドウを閉じます。

# パッケージ定義

ファイルの先頭でパッケージを定義します。

```
(defpackage :tutorial/01-simple-window
  (:use :cl)
  (:import-from :sdl2)
  (:export :main))
(in-package :tutorial/01-simple-window)
```

SDL2ライブラリをインポートしたり、main関数を外部から呼び出せるようにしたりします。

# SDL2ライブラリ初期化＆終了処理

SDL2ライブラリの初期化と終了を行うマクロを作成します。

```
(defparameter *screen-width*  640)
(defparameter *screen-height* 480)
```

ウィンドウの大きさは幅640ピクセル、高さ480ピクセルで定義しています。  
この値は好みで変更します。一般的には以下のサイズのパターンが多い気がします。

*  640 x 480
*  800 x 600
* 1024 x 768

```
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
         ,@body))))
```

## sdl2:with-init

SDLの初期化と終了時の処理をまとめて実行するマクロ。
これは、他の全てのSDLの関数の前に呼び出される必要があります。

```commonlisp
(sdl2:with-init (&rest sdl-init-flags) &body body)
```

`sdl-init-flags`パラメータは、初期化するSDLの部分を指定します(以下の表参照)。

| パラメータ      | 説明                                                |
|:----------------|:----------------------------------------------------|
| :timer          | タイマーサブシステム初期化                          |
| :audio          | オーディオサブシステム初期化                        |
| :video          | ビデオサブシステム初期化                            |
| :joystick       | ジョイスティックサブシステム初期化                  |
| :haptic         | ハプティクス(感覚フィードバック) サブシステム初期化 |
| :gamecontroller | ゲームコントローラサブシステム初期化                |
| :noparachute    |                                                     |
| :everything     | 上記のすべてを初期化                                |

詳細は以下を参照  
* [初期化と終了 (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/CategoryInit.html)

## sdl2:with-window

ウィンドウ作成処理を実行するマクロ。
タイトル、X座標、Y座標、幅、高さなどを設定。
`flags`には`:shown`や`:hidden`などのパラメータを設定できます。

```commonlisp
(sdl2:with-window (win &key title x y w h flags) &body body)
```

詳細は以下を参照  
* [ディスプレイとウィンドウ (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/CategoryVideo.html)

## sdl2:with-renderer

ウィンドウの2Dレンダリングコンテキストを生成します。

```commonlisp
(sdl2:with-renderer (renderer-sym window &key index flags) &body body)
```

詳細は以下を参照  
* [SDL_CreateRenderer (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_CreateRenderer.html)
* [SDL_RendererFlags (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RendererFlags.html)

# ベースプログラム

ここからプログラムを開始します。  

```commonlisp
(defun main ()
  (with-window-renderer (window renderer)
    (sdl2:with-event-loop (:method :poll)
      (:keydown (:keysym keysym)
                (if (sdl2:scancode= (sdl2:scancode-value keysym) :scancode-escape)
                    (sdl2:push-event :quit)))
      (:idle ()
             (sdl2:set-render-draw-color renderer 0 0 0 255)
             (sdl2:render-clear renderer)
             (sdl2:render-present renderer))
      (:quit () t))))
```

## sdl2:with-event-loop

イベントループマクロです。
このマクロ内にキー操作時の動作や各種イベントを記述していきます。

```commonlisp
(sdl2:with-event-loop (&key background method timeout recursive) &body event-handlers)
```

例として、Escキーが押下されたらSDL終了イベントを投げるプログラムを記載します。

```commonlisp
(:keyup (:keysym keysym)
        (when (scancode= (scancode-value keysym) :scancode-escape)
              (push-event :quit)))
```

`:keyup`は、キーが離された時のイベント処理です。(※ キーが押された時は、`:keydown`を使います。)
`keysym`は、受信したキーボード入力を保持する変数です。

`scancode=` / `scancode-value` / `push-event` に関しては後述します。

SDL終了イベントは以下のように記述します。

```commonlisp
(:quit () t)
```

描画処理などを行いたい場合は、以下のように記述します。

```commonlisp
(:idle ()
       ;; この中に描画処理などのイベントを記述していきます。
       )
```

詳細は以下を参照  
* [SDL_Event (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_Event.html)
* [SDL_EventType (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_EventType.html)

## sdl2:scancode=

キーの判定処理です。

```commonlisp
;; Generic-Function
(scancode= value scancode-key)

;; Method
(scancode= (scancode integer) scancode-key)

;; Method
(scancode= (keysym sdl-keysym) scancode-key)
```

## sdl2:scancode-value

`keysym`をそのスキャンコードの数値に変換します。

```commonlisp
(scancode-value keysym)
```

## sdl2:push-event

イベントをキューに加えます。

```commonlisp
(push-event event)
```

詳細は以下を参照  
* [SDL_PushEvent (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_PushEvent.html)
* [SDL_Event (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_Event.html)

## sdl2:render-present

レンダリングの結果を画面に反映します。

```commonlisp
(render-present renderer)
```

詳細は以下を参照  
* [SDL_RenderPresent (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderPresent.html)

## sdl2:set-render-draw-color

作図操作(矩形、線、およびクリア)に使用する色を設定します。

```commonlisp
(set-render-draw-color renderer r g b a)
```

詳細は以下を参照  
* [SDL_SetRenderDrawColor (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_SetRenderDrawColor.html)

## sdl2:render-clear

現在のレンダーターゲットを色で塗りつぶして消去します。

```commonlisp
(render-clear renderer)
```

詳細は以下を参照  
* [SDL_RenderClear (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderClear.html)
