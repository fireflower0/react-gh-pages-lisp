import React from 'react';
import { makeArticle } from '../../utils';

const WebApp = () => {
  const articles = [{
    label: '第1章 開発環境構築',
    route: require("./Articles/01-foreword.md"),
  }];

  return (
    <div>
      <h1>Webアプリケーション</h1>
      {articles.map(article => makeArticle(article))}
    </div>
  );
};

export default WebApp;
