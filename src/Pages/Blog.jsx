import React from 'react';
import { makeArticle } from './utils';

const Blog = () => {
  const articles = [{
    label: 'サンプル',
    route: require('./Articles/Sample/sample.md'),
  }];
  return (
    <div>
      <h1>Blog</h1>
      {articles.map(article => makeArticle(article.label, article.route))}
    </div>
  );
};

export default Blog;
