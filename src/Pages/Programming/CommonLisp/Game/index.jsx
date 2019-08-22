import React from 'react';
import { makeArticle } from '../../../utils';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>ゲームプログラミング</h1>
        {makeArticle("はじめに", require("./Articles/01-foreword.md"))}
        {makeArticle("ウィンドウを表示する", require("./Articles/02-window.md"))}
        {makeArticle("文字列描画", require("./Articles/03-string-drawing.md"))}
        {makeArticle("2Dレンダリング", require("./Articles/04-2d-rendering.md"))}
      </div>
    );
  }
}

export default Game;
