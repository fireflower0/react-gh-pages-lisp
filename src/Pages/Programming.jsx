import React from 'react';
import { makeArticleList } from './utils';

const Programming = () => {
  const articles = [{
    id: 1,
    label: 'Common Lisp',
    route: '/programming/commonlisp',
  }];

  return (
    <div>
      <h1>Programming</h1>
      {articles.map(article => makeArticleList(article))}
    </div>
  );
};

export default Programming;
