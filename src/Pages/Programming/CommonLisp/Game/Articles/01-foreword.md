# ゲーム開発ライブラリ

必要な開発パッケージは以下の5つです。

* **SDL2 (Simple DirectMedia Layer 2)**  
オーディオ, キーボード, マウス, ジョイスティック, OpenGLやDirect3D経由のグラフィックハードウェアへの低レベルアクセスを提供する開発ライブラリ
* **SDL2 Gfx**  
線や文字の描画を行うモジュール
* **SDL2 Image**  
BMPファイルなどの画像ファイル読み込み、描画を行うモジュール
* **SDL2 Mixer**  
WAVEファイルなどの音声ファイル出力を行うモジュール
* **SDL2 TTF (True-Type fonts)**  
フォントの描画を行うモジュール

## SDL2

SDL2のインストール方法は以下の２通りです。

* パッケージマネージャからのインストール

SDL2の開発パッケージ`libsdl2-dev`をインストールするには、以下のコマンドを使用します。

```shell
sudo apt install libsdl2-dev
```

* 最新のソースコードからインストール

最新版のソースコードをダウンロードし、Make & Installするには以下の手順で行います。

```shell
wget https://www.libsdl.org/release/SDL2-2.0.8.tar.gz
tar xvzf SDL2-2.0.8.tar.gz
cd SDL2-2.0.8/
./configure
make
sudo make install
```

## SDL2 Gfx

* パッケージマネージャからのインストール

SDL2 Gfx の開発パッケージ`libsdl2-gfx-dev`をインストールするには、以下のコマンドを使用します。

```shell
sudo apt install libsdl2-gfx-dev
```

* 最新のソースコードからインストール

最新版のソースコードをダウンロードし、Make & Installするには以下の手順で行います。

```shell
wget http://www.ferzkopp.net/Software/SDL2_gfx/SDL2_gfx-1.0.4.tar.gz
tar xvzf SDL2_gfx-1.0.4.tar.gz
cd SDL2_gfx-1.0.4/
./configure
make
sudo make install
```

## SDL2 Image

* パッケージマネージャからのインストール

SDL2 Image の開発パッケージ`libsdl2-image-dev`をインストールするには、以下のコマンドを使用します。

```shell
sudo apt install libsdl2-image-dev
```

* 最新のソースコードからインストール

最新版のソースコードをダウンロードし、Make & Installするには以下の手順で行います。

```shell
wget https://www.libsdl.org/projects/SDL_image/release/SDL2_image-2.0.3.tar.gz
tar xvzf SDL2_image-2.0.3.tar.gz
cd SDL2_image-2.0.3/
./configure
make
sudo make install
```

## SDL2 Mixer

* パッケージマネージャからのインストール

SDL2 Mixer の開発パッケージ`libsdl2-mixer-dev`をインストールするには、以下のコマンドを使用します。

```shell
sudo apt install libsdl2-mixer-dev
```

* 最新のソースコードからインストール

最新版のソースコードをダウンロードし、Make & Installするには以下の手順で行います。

```shell
wget https://www.libsdl.org/projects/SDL_mixer/release/SDL2_mixer-2.0.2.tar.gz
tar xvzf SDL2_mixer-2.0.2.tar.gz
cd SDL2_mixer-2.0.2/
./configure
make
sudo make install
```

## SDL2 TTF

* パッケージマネージャからのインストール

SDL2 TTF の開発パッケージ`libsdl2-ttf-dev`をインストールするには、以下のコマンドを使用します。

```shell
sudo apt install libsdl2-ttf-dev
```

* 最新のソースコードからインストール

最新版のソースコードをダウンロードし、Make & Installするには以下の手順で行います。
freetype2の開発ライブラリが必要なので、最初にインストールしておきます。

```shell
sudo apt install libfreetype6 libfreetype6-dev
```

```shell
wget https://www.libsdl.org/projects/SDL_ttf/release/SDL2_ttf-2.0.14.tar.gz
tar xvzf SDL2_ttf-2.0.14.tar.gz
cd SDL2_ttf-2.0.14/
./configure
make
sudo make install
```

# cl-sdl2のインストール

Common Lispで使用するために`cl-sdl2`をインストールします。

Roswellを使っているなら以下の方法でインストール出来ます。

```shell
ros install lispgames/cl-sdl2
```

Quicklispなら`~/quicklisp/local-projects/`、Portacleを使っている人なら、`lin-portacle/portacle/projects`ディレクトリ内で以下のコマンドを実行します。

```shell
git clone https://github.com/lispgames/cl-sdl2.git
```

各種パッケージはQuicklispで以下のようにロードして使用します。

```
(ql:quickload :sdl2)
(ql:quickload :sdl2-image)
(ql:quickload :sdl2-mixer)
(ql:quickload :sdl2-ttf)
```

SDL2 Gfxだけは、以下をダウンロードしないと使えません。

Roswellを使っているなら以下の方法でインストール出来ます。

```shell
ros install Zulu-Inuoe/cl-sdl2-gfx
```

Quicklispなら`~/quicklisp/local-projects/`、Portacleを使っている人なら、`lin-portacle/portacle/projects`ディレクトリ内で以下のコマンドを実行します。

````shell
git clone https://github.com/Zulu-Inuoe/cl-sdl2-gfx.git
````

使うときはQuicklispでロードします。

```lisp
(ql:quickload :sdl2-gfx)
```

これで、Common Lispプログラム内からロードできるようになります。
