import React from 'react';
import { makeArticle } from '../../../utils';

class WebApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Webアプリケーション</h1>
        {makeArticle("第1章 開発環境構築", require("./Articles/01-foreword.md"))}
      </div>
    );
  }
}

export default WebApp;
