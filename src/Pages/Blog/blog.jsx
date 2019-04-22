import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Section = styled.section`
  background: #FFF;
`

const Article = styled.article`
  background: #FFEFD5;
  padding-top:    20px;
  padding-bottom: 20px
  padding-left:   20px;
  padding-right:  80px;
  border : 5px solid maroon;
`;

class Blog extends React.Component {
  makeBlog(title, path){
    return (
      <Article>
        <details>
          <summary>{title}</summary>
          <Markdown filePath={path} />
        </details>
      </Article>
    );
  }

  render() {
    return (
      <div>
        <Section>
          {this.makeBlog("2019/04/22 (Mon)", require("./Articles/20190422blog.md"))}
        </Section>
      </div>
    );
  }
}

export default Blog;
