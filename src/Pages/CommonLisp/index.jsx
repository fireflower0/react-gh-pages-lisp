import React from 'react';
import { makeArticleList } from '../utils';

const CommonLisp = () => {
  const articles = [{
    label: 'Common Lisp入門',
    route: '/programming/commonlisp/gettingstarted',
  }, {
    label: 'ゲームプログラミング',
    route: '/programming/commonlisp/game',
  }, {
    label: 'Raspberry Pi 電子工作',
    route: '/programming/commonlisp/raspberrypi',
  }, {
    label: 'GUIアプリケーション',
    route: '/programming/commonlisp/gui',
  }, {
    label: 'Webアプリケーション',
    route: '/programming/commonlisp/webapp',
  }];

  return (
    <div>
      <h1>Common Lisp</h1>
      {articles.map(article => makeArticleList(article))}
    </div>
  );
};

export default CommonLisp;
