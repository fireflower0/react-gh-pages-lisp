import React from 'react';
import { makeArticle } from './utils';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {makeArticle('サンプル', require('./Articles/Sample/sample.md'))}
    </div>
  );
};

export default Blog;
