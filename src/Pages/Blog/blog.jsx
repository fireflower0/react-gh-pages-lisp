import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Article = styled.article`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

class Blog extends React.Component {
  makeBlog(mdFilePath){
    return (
      <Markdown mdFilePath={mdFilePath} />
    );
  }

  render() {
    return (
      <Article>
        {this.makeBlog(require("./Articles/Sample/sample.md"))}
      </Article>
    );
  }
}

export default Blog;
