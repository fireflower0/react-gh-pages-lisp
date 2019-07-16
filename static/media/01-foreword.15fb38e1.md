# はじめに

# 環境構築


## プロジェクト作成

データベースはデフォルトではSQLite3を使用する

```shell
utopian new my-app
```

他のデータベースを使用する場合は以下のように`--database`オプションを付けてその後に使用するデータベースを入力する

```shell
utopian new my-app-with-postgres --database postgres
```

## 依存関係のインストール

```shell
qlot install
```

```shell
npm install
```
