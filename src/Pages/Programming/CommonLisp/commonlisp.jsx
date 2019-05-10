import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Article = styled.article`
  padding: 10px;
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
        {this.makeList("/programming/commonlisp/gettingstarted", "彡(ﾟ)(ﾟ)と学ぶCommon Lisp")}
        {this.makeList("/programming/commonlisp/game", "ゲームプログラミング")}
        {this.makeList("/programming/commonlisp/raspberrypi", "Raspberry Pi 電子工作")}
      </div>
    );
  }
}

export default CommonLisp;
