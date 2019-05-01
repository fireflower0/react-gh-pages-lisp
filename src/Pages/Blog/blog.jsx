import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Article = styled.article`
  padding: 10px;
  background-color: #FAF0E6;
`;

class Blog extends React.Component {
  makeBlog(title, mdFilePath){
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
        <h1>Blog</h1>
        {this.makeBlog("サンプル", require("./Articles/Sample/sample.md"))}
      </div>
    );
  }
}

export default Blog;
