import React from 'react';
import styled from 'styled-components';
import Markdown from '../../Shared/Markdown/markdown';

const Section = styled.section`
`

const Article = styled.article`
`;

class Blog extends React.Component {
  makeBlog(path){
    return (
      <Article>
        <Markdown filePath={path} />
      </Article>
    );
  }

  render() {
    return (
      <div>
        <Section>
          {this.makeBlog(require("./Articles/20190422blog.md"))}
        </Section>
      </div>
    );
  }
}

export default Blog;
