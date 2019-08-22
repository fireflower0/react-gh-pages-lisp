import React from 'react';
import { makeList } from '../../utils';

class CommonLisp extends React.Component {
  render() {
    return (
      <div>
        <h1>Common Lisp</h1>
        {makeList("/programming/commonlisp/gettingstarted", "Common Lisp入門")}
        {makeList("/programming/commonlisp/game", "ゲームプログラミング")}
        {makeList("/programming/commonlisp/raspberrypi", "Raspberry Pi 電子工作")}
        {makeList("/programming/commonlisp/gui", "GUIアプリケーション")}
        {makeList("/programming/commonlisp/webapp", "Webアプリケーション")}
      </div>
    );
  }
}

export default CommonLisp;
