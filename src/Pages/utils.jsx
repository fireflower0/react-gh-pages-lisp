import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from '../Shared/Markdown';

const Article = styled.article`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

export const makeArticleList = (article) => (
  <Article key={article.id}>
    <Link to={article.route}>{article.label}</Link>
  </Article>
);

export const makeArticle = (article) => (
  <Article key={article.id}>
    <details>
      <summary>{article.label}</summary>
      <Markdown filePath={article.route} />
    </details>
  </Article>
);

export const makeLinkList = (link) => (
  <li key={link.id}>
    <a href={link.url} rel='noopener noreferrer' target='_blank'>
      {link.label}
    </a>
  </li>
);
