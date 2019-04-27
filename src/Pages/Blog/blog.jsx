import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Article = styled.article`
  width: 100%;
  max-height: 100%;
  padding: 2.5%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
  overflow-y: auto;
`;

class Blog extends React.Component {
  makeBlog(mdFilePath){
    return (
      <Markdown mdFilePath={mdFilePath} />
    );
  }

  render() {
    return (
      <div>
        <Article>
          {this.makeBlog(require("./Articles/sample.md"))}
        </Article>
      </div>
    );
  }
}

export default Blog;
