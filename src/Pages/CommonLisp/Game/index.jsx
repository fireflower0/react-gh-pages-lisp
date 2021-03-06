import React from 'react';
import { makeArticle } from '../../utils';

const Game = () => {
  const articles = [{
    id: 1,
    label: 'はじめに',
    route: require("./Articles/01-foreword.md"),
  }, {
    id: 2,
    label: 'ウィンドウを表示する',
    route: require("./Articles/02-window.md"),
  }, {
    id: 3,
    label: '文字列描画',
    route: require("./Articles/03-string-drawing.md"),
  }, {
    id: 4,
    label: '2Dレンダリング',
    route: require("./Articles/04-2d-rendering.md"),
  }];

  return (
    <div>
      <h1>ゲームプログラミング</h1>
      {articles.map(article => makeArticle(article))}
    </div>
  );
};

export default Game;
