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

export const makeList = (link, title) => {
  return(
    <Article>
      <Link to={link}>{title}</Link>
    </Article>
  );
};

export const makeArticle = (title, filePath) => {
  return (
    <Article>
      <details>
        <summary>{title}</summary>
        <Markdown filePath={filePath} />
      </details>
    </Article>
  );
};

export const makeLinkList = (title, link) => {
  return(
    <li>
      <a href={link} rel="noopener noreferrer" target="_blank">{title}</a>
    </li>
  );
};
