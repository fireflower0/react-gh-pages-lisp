import React from 'react';
import { makeArticle } from '../../utils';

const WebApp = () => {
  const articleRoutes = [{
    label: '第1章 開発環境構築',
    url: require("./Articles/01-foreword.md"),
  }];

  return (
    <div>
      <h1>Webアプリケーション</h1>
      {articleRoutes.map(route => makeArticle(route.label, route.url))}
    </div>
  );
};

export default WebApp;
