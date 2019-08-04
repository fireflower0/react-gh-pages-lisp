# はじめに



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

