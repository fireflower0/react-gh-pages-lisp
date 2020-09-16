2Dレンダリング

![string-drawing](https://github.com/fireflower0/react-gh-pages-lisp/blob/master/src/Pages/Programming/CommonLisp/Game/Articles/Pic/04-2d-rendering.png?raw=true)

[2Dレンダリング (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/CategoryRender.html)

# レンダーを黒色でクリアする

指定された色で画面全体をクリアします。

```lisp
(defmethod clear-render (renderer (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (sdl2:render-clear renderer)))
```

# 線を描画する

始点(x1, y1)と終点(x2, y2)と色を指定すると直線が描画されます。

```lisp
(defmethod line-render (renderer x1 y1 x2 y2 (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (sdl2:render-draw-line renderer x1 y1 x2 y2)))
```

## sdl2:render-draw-line

現在のレンダーターゲットに直線を描画する

```
(sdl2:render-draw-line renderer x1 y1 x2 y2)
```

[SDL_RenderDrawLine (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderDrawLine.html)

# 複数の繋がった線を描画する

```lisp
(defmethod lines-render (renderer (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:with-points ((a 160 160)
                       (b 300 180)
                       (c 400 160)
                       (d 450 200))
      (sdl2:set-render-draw-color renderer red green blue alpha)
      (multiple-value-bind (points num) (sdl2:points* a b c d)
        (sdl2:render-draw-lines renderer points num)))))
```

## sdl2:with-points

`SDL_point`構造体のための`LET`のような便利なバインディング機能。  
2次元上の点(X座標, Y座標)の値をバインディングします。

```lisp:syntax
(sdl2:with-points bindings &body body)
```

## sdl2:points*

直線の端点の`SDL_Point`の配列と点の数の2値を返します。  
2つの返り値を受け取るには、`multiple-value-bind`を使用します。

```lisp:syntax
(sdl2:points* &rest points)
```

## sdl2:render-draw-lines

現在のレンダーターゲットに複数の繋がった直線を描画する

```
(sdl2:render-draw-lines renderer points num)
```

* [SDL_Point (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_Point.html)
* [SDL_RenderDrawLines (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderDrawLines.html)

# ランダムに複数の点を描画する

```lisp
(defmethod points-render (renderer (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:with-points ((a (random 800) (random 800))
                       (b (random 800) (random 800))
                       (c (random 800) (random 800))
                       (d (random 800) (random 800)))
      (sdl2:set-render-draw-color renderer red green blue alpha)
      (multiple-value-bind (points num) (sdl2:points* a b c d)
        (sdl2:render-draw-points renderer points num)))))
```

## sdl2:render-draw-points

現在のレンダーターゲットに複数の点を描画する。

```lisp
(sdl2:render-draw-points renderer points num)
```

* [SDL_RenderDrawPoints (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderDrawPoints.html)

# 長方形を描画する

```lisp
(defmethod rect-render (renderer x y w h (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (sdl2:render-draw-rect renderer (sdl2:make-rect x y w h))))
```

# 複数の長方形を描画する

```lisp
(defmethod rects-render (renderer x y w h num x-move y-move (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (multiple-value-bind (rects num)
        (apply #'sdl2:rects*
               (loop :for x-pos :upto num
                     :for y-pos :upto num
                     :collect (sdl2:make-rect (+ x (* x-pos x-move))
                                              (+ y (* y-pos y-move))
                                              w
                                              h)))
      (sdl2:render-draw-rects renderer rects num))))
```

## sdl2:render-draw-rects

現在のレンダーターゲットに複数の長方形を描画する。

```lisp
(sdl2:render-draw-rects renderer rects num)
```

* [SDL_RenderDrawRects (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderDrawRects.html)

# 塗りつぶした長方形を描画する

```lisp
(defmethod fill-rect-render (renderer x y w h (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (sdl2:render-fill-rect renderer (sdl2:make-rect x y h w))))
```

## sdl2:render-fill-rect

現在のレンダーターゲットに塗りつぶした長方形を描画する。

```lisp
(sdl2:render-fill-rect renderer rect)
```

* [SDL_RenderFillRect (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderFillRect.html)

# 複数の塗りつぶした長方形を描画する

```lisp
(defmethod fill-rects-render (renderer x y w h num x-move y-move (color sdl-color))
  (with-slots (red green blue alpha) color
    (multiple-value-bind (rects rect-num)
        (apply #'sdl2:rects*
               (loop :for x-pos :upto num
                     :for y-pos :upto num
                     :collect (sdl2:make-rect (+ x (* x-pos x-move))
                                              (+ y (* y-pos y-move))
                                              w
                                              h)))
      (sdl2:set-render-draw-color renderer red green blue alpha)
      (sdl2:render-fill-rects renderer rects rect-num))))
```

## sdl2:render-fill-rect

現在のレンダーターゲットに塗りつぶした長方形を描画する。

```lisp
(sdl2:render-fill-rects renderer rects rect-num)
```

* [SDL_RenderDrawRects (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/SDL_RenderDrawRects.html)

# メイン関数

以下のように各種関数を呼び出します。

```lisp
(defun main ()
  (with-window-renderer (window renderer)
    (let ((black      (make-instance 'sdl-color :alpha 255))
          (red        (make-instance 'sdl-color :red   255 :alpha 255))
          (green      (make-instance 'sdl-color :green 255 :alpha 255))
          (blue       (make-instance 'sdl-color :blue  255 :alpha 255))
          (yellow     (make-instance 'sdl-color :red   255 :green 255 :alpha 255))
          (purple     (make-instance 'sdl-color :red   255 :blue  255 :alpha 255))
          (lightblue  (make-instance 'sdl-color :green 255 :blue  255 :alpha 255))
          (lightgreen (make-instance 'sdl-color :red   144 :green 238 :blue  144 :alpha 255)))
      (sdl2:with-event-loop (:method :poll)
        (:keydown (:keysym keysym)
                  (if (sdl2:scancode= (sdl2:scancode-value keysym)
                                      :scancode-escape)
                      (sdl2:push-event :quit)))
        (:idle ()
               (clear-render renderer black)
               (line-render renderer 150 50 400 50 red)
               (lines-render renderer blue)
               (points-render renderer green)
               (rect-render renderer 300 300 100 100 yellow)
               (rects-render renderer 200 300 8 8 10 10 10 purple)
               (fill-rect-render renderer 445 400 35 35 lightblue)
               (fill-rects-render renderer 200 400 8 8 5 10 10 lightgreen)
               (sdl2:render-present renderer))
        (:quit () t)))))
```
