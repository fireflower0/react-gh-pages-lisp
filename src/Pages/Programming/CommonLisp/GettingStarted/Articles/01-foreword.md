# 開発環境構築

まずは[Roswell](https://github.com/roswell/roswell)をインストールします。  
Roswellは[Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux)でインストールできます。  


```shell
$ brew install roswell
```

Roswellをインストールしたら、セットアップを行います。

```shell
$ ros setup
```

セットアップが完了するとSBCL(Steel Bank Common Lisp)というCommon Lispが使えるようになります。  
以下のコマンドを実行するとCommon Lispの種類とバージョンが表示されます。

```shell
$ ros run -- --version
```

# Emacsの設定

```shell
$ ros install slime
```

以下、自分のEmacs設定の一部です。

```elisp
;; パッケージ
(autoload 'package "package" nil t)

;; http://stackoverflow.com/a/26110978
(setq package-check-signature nil)

(setq package-archives
      '(("gnu" . "http://elpa.gnu.org/packages/")
        ("melpa" . "http://melpa.org/packages/")
        ("org" . "http://orgmode.org/elpa/")))

(package-initialize)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Common Lisp
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(load (expand-file-name "~/.roswell/helper.el"))

;; SLIME
(autoload 'slime "slime" nil t)
(slime-setup '(slime-repl slime-fancy slime-banner))
(setq slime-net-coding-system 'utf-8-unix)
(setq slime-startup-animation nil)

;; カーソル付近にある単語の情報を表示
(slime-autodoc-mode)

;; 日本語利用のための設定（Lisp 環境側の対応も必要）
(setq slime-net-coding-system 'utf-8-unix)
(autoload 'ac-slime "ac-slime" nil t)
(add-hook 'slime-mode-hook 'set-up-slime-ac)
(add-hook 'slime-repl-mode-hook 'set-up-slime-ac)

;; Qlot
(defun slime-qlot-exec (directory)
  (interactive (list (read-directory-name "Project directory: ")))
  (slime-start :program "qlot"
               :program-args '("exec" "ros" "-S" "." "run")
               :directory directory
               :name 'qlot
               :env (list (concat "PATH="
				  (mapconcat 'identity exec-path ":")))))

;; Lispの括弧の対応に沿った編集モード
(autoload 'paredit "paredit" nil t)

(autoload 'enable-paredit-mode
  "paredit" "Turn on pseudo-structural editing of Lisp code." t)
(add-hook 'emacs-lisp-mode-hook       #'enable-paredit-mode)
(add-hook 'eval-expression-minibuffer-setup-hook #'enable-paredit-mode)
(add-hook 'ielm-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-mode-hook             #'enable-paredit-mode)
(add-hook 'lisp-interaction-mode-hook #'enable-paredit-mode)
(add-hook 'scheme-mode-hook           #'enable-paredit-mode)

;; ParEdit And SLIME REPL
(add-hook 'slime-repl-mode-hook (lambda () (paredit-mode +1)))

;; Stop SLIME's REPL from grabbing DEL,
;; which is annoying when backspacing over a '('
(defun override-slime-repl-bindings-with-paredit ()
  (define-key slime-repl-mode-map
    (read-kbd-macro paredit-backward-delete-key) nil))
(add-hook 'slime-repl-mode-hook 'override-slime-repl-bindings-with-paredit)
```
