import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Article = styled.article`
  width: 100%;
  padding: 2.5%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

class CommonLisp extends React.Component {
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
        <h1>Common Lisp</h1>
        {this.makeList("/programming/commonlisp/gettingstarted", "Common Lisp 入門")}
        {this.makeList("/programming/commonlisp/game", "ゲームプログラミング")}
      </div>
    );
  }
}

export default CommonLisp;
