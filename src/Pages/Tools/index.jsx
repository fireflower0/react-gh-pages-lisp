import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Article = styled.article`
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FAF0E6;
`;

class Tools extends React.Component {
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
        <h1>Tools</h1>
        {this.makeList("/tools/texteditor", "テキストエディタ")}
      </div>
    );
  }
}

export default Tools;
