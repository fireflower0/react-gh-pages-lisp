# はじめに

```
$ ros install fukamachi/utopian
$ ros install qlot
```

# 最初のアプリケーション

## プロジェクト作成

データベースはデフォルトではSQLite3を使用する

```shell
$ utopian new hello-app
```

他のデータベースを使用する場合は以下のように`--database`オプションを付けてその後に使用するデータベースを入力する

```shell
$ utopian new hello-app-with-postgres --database postgres
```

## 依存関係のインストール

```shell
$ qlot install
```

```shell
$ npm install
```

## アプリ起動

Lemを使用している場合は、`~/.lem/init.lisp`に以下を追記します。

```lisp
(define-command slime-qlot-exec (directory)
  ((list (prompt-for-directory "Project directory: " (buffer-directory))))
  (change-directory directory)
  (lem-lisp-mode:run-slime (lem-lisp-mode::get-lisp-command :prefix "qlot exec ")))
```

Lemを起動し、以下のコマンドを実行します。

```
M-x slime-qlot-exec
```

プロジェクトをQuicklispでロードします。

```lisp
(ql:quickload :hello-app)
```

以下のコマンドでアプリを起動します。

```lisp
(hello-app:start)
```

この状態でWebブラウザで以下にアクセスすると`Welcome to Utopian!`と書かれたページが表示されます。

```
http://localhost:5000/
```

## コントローラを生成する

コントローラを追加するには以下のコマンドを実行します。

```
$ utopian generate controller welcome index
```

以下のファイルが自動生成されます。

```
controllers/welcome.lisp
```

```lisp
(defpackage #:hello-app/controllers/welcome
  (:use #:cl
        #:utopian)
  (:export #:index))
(in-package #:hello-app/controllers/welcome)

(defun index (params)
  (declare (ignore params))
  (render nil))
```

```
views/welcome/index.html.dj
```

```html
{% extends "layouts/default.html.dj" %}
{% block title %}hello-app - welcome{% endblock %}
{% block content %}
<h1>welcome/index</h1>
<p>Find me in views/welcome/index.html.dj</p>
{% endblock %}
```

```
assets/stylesheets/welcome.scss
```

```css
// This SCSS file is for welcome controller.
```

## モデルを生成する

```
$ utopian generate model user name:varchar:20 email:varchar:255
```

以下のファイルが自動生成されます。

```
models/user.lisp
```

```lisp
(defpackage #:hello-app/models/user
  (:use #:cl
        #:mito)
  (:export #:user
           #:user-name
           #:user-email))
(in-package #:hello-app/models/user)

(defclass user ()
  ((name :col-type (:varchar 20)
         :initarg :name
         :accessor user-name)
   (email :col-type (:varchar 255)
          :initarg :email
          :accessor user-email))
  (:metaclass dao-table-class))
```

## DBマイグレーション


```
$ ./quicklisp/bin/lake db:generate-migrations

CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP
);
Successfully generated: /home/fireflower0/Programming/CommonLisp/WebApp/hello-app/db/migrations/20190805125858.up.sql
```

### ファイル適用

```
$ ./quicklisp/bin/lake db:migrate

Applying '/home/fireflower0/Programming/CommonLisp/WebApp/hello-app/db/schema.sql'...
-> CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP
);
-> CREATE TABLE IF NOT EXISTS "schema_migrations" (
    "version" VARCHAR(255) PRIMARY KEY
);
-> INSERT INTO schema_migrations (version) VALUES ('20190805125858');
Successfully updated to the version NIL.
```

### テスト環境にも適用

```
$ APP_ENV=test quicklisp/bin/lake db:migrate

Applying '/home/fireflower0/Programming/CommonLisp/WebApp/hello-app/db/schema.sql'...
-> CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP
);
-> CREATE TABLE IF NOT EXISTS "schema_migrations" (
    "version" VARCHAR(255) PRIMARY KEY
);
-> INSERT INTO schema_migrations (version) VALUES ('20190805125858');
Successfully updated to the version NIL.
```
