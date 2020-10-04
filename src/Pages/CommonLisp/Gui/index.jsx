import React from 'react';
import { makeArticle } from '../../utils';

const Gui = () => {
  const articles = [{
    label: '第1章 開発環境構築',
    route: require("./Articles/01-foreword.md"),
  }];

  return (
    <div>
      <h1>GUIアプリケーション</h1>
      {articles.map(article => makeArticle(article))}
    </div>
  );
};

export default Gui;
