import React from 'react';
import { Link } from 'react-router-dom'

class CommonLisp extends React.Component {
  render() {
    return (
      <div>
        <Link to="/programming/commonlisp/game">Common Lisp ゲームプログラミング</Link>
      </div>
    );
  }
}

export default CommonLisp;
