import React from 'react';
import { makeArticle } from '../../utils';

const Game = () => {
  const articleRoutes = [{
    label: 'はじめに',
    url: require("./Articles/01-foreword.md"),
  }, {
    label: 'ウィンドウを表示する',
    url: require("./Articles/02-window.md"),
  }, {
    label: '文字列描画',
    url: require("./Articles/03-string-drawing.md"),
  }, {
    label: '2Dレンダリング',
    url: require("./Articles/04-2d-rendering.md"),
  }];

  return (
    <div>
      <h1>ゲームプログラミング</h1>
      {articleRoutes.map(route => makeArticle(route.label, route.url))}
    </div>
  );
};

export default Game;
