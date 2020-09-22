import React from 'react';
import { makeList } from '../utils';

const CommonLisp = () => {
  const lists = [{
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
      {lists.map(list => makeList(list.route, list.label))}
    </div>
  );
};

export default CommonLisp;
