import React from 'react';
import styled from 'styled-components';
import Markdown from '../../../../Shared/Markdown/markdown';

const Article = styled.article`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

class WebApp extends React.Component {
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

  makeLinkList(title, link) {
    return(
      <li>
        <a href={link} rel="noopener noreferrer" target="_blank">{title}</a>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h1>Webアプリケーション</h1>
        {this.makeArticle("はじめに", require("./Articles/01-foreword.md"))}
      </div>
    );
  }
}

export default WebApp;
