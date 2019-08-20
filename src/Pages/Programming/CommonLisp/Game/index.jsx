import React from 'react';
import styled from 'styled-components';
import Markdown from '../../../../Shared/Markdown';

const Article = styled.article`
  width: 100%;
  padding: 10px;
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
        <h1>ゲームプログラミング</h1>
        {this.makeArticle("はじめに", require("./Articles/01-foreword.md"))}
        {this.makeArticle("ウィンドウを表示する", require("./Articles/02-window.md"))}
        {this.makeArticle("文字列描画", require("./Articles/03-string-drawing.md"))}
        {this.makeArticle("2Dレンダリング", require("./Articles/04-2d-rendering.md"))}
      </div>
    );
  }
}

export default Game;
