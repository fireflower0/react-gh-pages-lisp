import React from 'react';
import { makeList } from '../utils';

class Programming extends React.Component {
  render() {
    return (
      <div>
        <h1>Programming</h1>
        {makeList("/programming/commonlisp", "Common Lisp")}
      </div>
    );
  }
}

export default Programming;
