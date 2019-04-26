import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Div = styled.div`
  padding: 12px;
`

const H1 = styled.h1`
  width: 100%;
  font-size: 150%;
  color: #313131;
  letter-spacing: 3px;
  padding-bottom:2px;
  padding-top: 10px;
  border-bottom: 1px solid #bababa;
  margin-bottom: 15px;
  float: left;
`;

const Article = styled.article`
  width: 100%;
  max-height: 100%;
  padding: 2.5%;
  margin-bottom: 30px;
  background-color: #FAF0E6;
  overflow-y: auto;
  float: left;
`;

class Blog extends React.Component {
  makeBlog(mdFilePath){
    return (
      <Markdown mdFilePath={mdFilePath} />
    );
  }

  render() {
    return (
      <Div>
        <H1>Blog</H1>
        <Article>
          {this.makeBlog(require("./Articles/sample.md"))}
        </Article>
      </Div>
    );
  }
}

export default Blog;
