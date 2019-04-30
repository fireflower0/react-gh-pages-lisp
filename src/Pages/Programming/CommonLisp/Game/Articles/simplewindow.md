# ウィンドウを表示する

## SDL2ライブラリ初期化＆終了処理

```
(defconstant +screen-width+  640)
(defconstant +screen-height+ 480)

(defmacro with-window-renderer ((window renderer) &body body)
  `(sdl2:with-init (:video)
     (sdl2:with-window (,window
                        :title "SDL2 Tutorial 01"
                        :w     +screen-width+
                        :h     +screen-height+
                        :flags '(:shown))
       (sdl2:with-renderer (,renderer
                            ,window
                            :index -1
                            :flags '(:accelerated :presentvsync))
         (sdl2-image:init '(:png))
         (sdl2-ttf:init)
         ,@body
         (sdl2-image:quit)
         (sdl2-ttf:quit)))))
```

## ベースプログラム

```
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
