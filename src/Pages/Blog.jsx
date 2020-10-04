import React from 'react';
import styled from 'styled-components';
import { makeArticle } from './utils';

const FormWrapper = styled.div``;

const Blog = () => {
  const articles = [{
    label: 'サンプル',
    route: require('./Blogs/Sample/sample.md'),
  }];
  return (
    <FormWrapper>
      <h1>Blog</h1>
      {articles.map(article => makeArticle(article))}
    </FormWrapper>
  );
};

export default Blog;
