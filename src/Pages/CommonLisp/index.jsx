import React from 'react';
import { makeArticleList } from '../utils';

const CommonLisp = () => {
  const articles = [{
    id: 1,
    label: 'Common Lisp入門',
    route: '/programming/commonlisp/gettingstarted',
  }, {
    id: 2,
    label: 'ゲームプログラミング',
    route: '/programming/commonlisp/game',
  }, {
    id: 3,
    label: 'Raspberry Pi 電子工作',
    route: '/programming/commonlisp/raspberrypi',
  }, {
    id: 4,
    label: 'GUIアプリケーション',
    route: '/programming/commonlisp/gui',
  }, {
    id: 5,
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
