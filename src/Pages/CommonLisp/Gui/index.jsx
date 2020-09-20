import React from 'react';
import { makeArticle } from '../../utils';

const Gui = () => {
  const articleRoutes = [{
    label: '第1章 開発環境構築',
    url: require("./Articles/01-foreword.md"),
  }];

  return (
    <div>
      <h1>GUIアプリケーション</h1>
      {articleRoutes.map(route => makeArticle(route.label, route.url))}
    </div>
  );
};

export default Gui;
