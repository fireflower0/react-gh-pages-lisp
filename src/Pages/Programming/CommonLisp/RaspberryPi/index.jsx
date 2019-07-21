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

class RaspberryPi extends React.Component {
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
        <h1>Raspberry Pi 電子工作</h1>
        {this.makeArticle("Lチカ", require('./Articles/01-blink.md'))}
        {/* {this.makeArticle("タクトスイッチ", require(''))} */}
        {/* {this.makeArticle("センサー", require(''))} */}
      </div>
    );
  }
}

export default RaspberryPi;
