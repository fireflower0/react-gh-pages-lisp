import React from 'react';
import { makeArticle } from '../utils';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        {makeArticle("サンプル", require("./Articles/Sample/sample.md"))}
      </div>
    );
  }
}

export default Blog;
