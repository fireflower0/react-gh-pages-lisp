import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
  padding: 10px;
  background-color: #FAF0E6;
`;


class Programming extends React.Component {
  makeList(link, title) {
    return(
      <Article>
        <Link to={link}>{title}</Link>
      </Article>
    );
  }

  render() {
    return (
      <div>
        <h1>Programming</h1>
        {this.makeList("/programming/commonlisp", "Common Lisp")}
      </div>
    );
  }
}

export default Programming;
