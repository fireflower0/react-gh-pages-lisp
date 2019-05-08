電子工作の基本、Lチカ

# WiringPiラッパー

CommonLispでWiringPiを使うためにラッパーを作成します。

```lisp
;; Init wiringPi
(defcfun ("wiringPiSetupGpio" wiringpi-setup-gpio) :int)

;; GPIO pin mode setting
(defcfun ("pinMode" pin-mode) :void
  (pin :int) (mode :int))

;; Output control of GPIO pin
(defcfun ("digitalWrite" digital-write) :void
  (pin :int) (value :int))

;; Delay (millisecond)
(defcfun ("delay" delay) :void
  (howlong :uint))
```

# Lチカ

Lチカプログラムです。

```lisp
(defconstant +pin+ 11)

(defun main ()
  (wiringpi-setup-gpio)
  (pin-mode +pin+ +output+)

  ;; Infinite loop (Ctrl-c exits loop)
  (loop
     (digital-write +pin+ 1)   ; Turn on LED
     (delay 500)               ; Delay 500(ms)
     (digital-write +pin+ 0)   ; Turn off LED
     (delay 500)))             ; Delay 500(ms)
```
