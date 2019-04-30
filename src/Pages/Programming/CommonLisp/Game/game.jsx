import React from 'react';
import styled from 'styled-components';
import Markdown from '../../../../Shared/Markdown/markdown';

const Article = styled.article`
  width: 100%;
  padding: 2.5%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

class Game extends React.Component {
  makeArticle(title, mdFilePath){
    return (
      <Article>
        <details>
          <summary>{title}</summary>
          <Markdown mdFilePath={mdFilePath} />
        </details>
      </Article>
    );
  }

  render() {
    return (
      <div>
        <h1>Common Lisp ゲームプログラミング</h1>
        {this.makeArticle("はじめに", require("./Articles/foreword.md"))}
        {this.makeArticle("ウィンドウを表示する", require("./Articles/simplewindow.md"))}
      </div>
    );
  }
}

export default Game;
