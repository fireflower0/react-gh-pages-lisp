# はじめに

# 環境構築

## データベース

# PostgreSQLのインストール

以下のコマンドでPostgreSQLをインストールします。

```
sudo apt install postgresql
```

## バージョン確認

以下のコマンドで、PostgreSQLのバージョンを確認します。

```
psql --version
```

## フルパス確認

以下のコマンドで、PostgreSQLのフルパスを確認します。

```
which psql
```

## プロセス確認

以下のコマンドで、プロセスが起動していることを確認します。

```
ps aux | grep postgres | grep -v grep
```


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
