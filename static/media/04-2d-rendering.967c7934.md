2Dレンダリングについて

[2Dレンダリング (SDL 2.0 日本語リファレンスマニュアル)](http://sdl2referencejp.osdn.jp/CategoryRender.html)

# レンダー用カラークラス

文字列描画のときと同じものです。THE使い回し。

```lisp
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

# 長方形を描画する

```lisp
(defmethod rect-render (renderer x y w h (color sdl-color))
  (with-slots (red green blue alpha) color
    (sdl2:set-render-draw-color renderer red green blue alpha)
    (sdl2:render-draw-rect renderer (sdl2:make-rect x y w h))))
```

# 複数の長方形を描画する

```lisp
()
```

# 塗りつぶした長方形を描画する

```lisp
()
```

# 複数の塗りつぶした長方形を描画する

```lisp
()
```

