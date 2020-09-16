import React from 'react';
import { makeList } from './utils';

const Programming = () => {
  return (
    <div>
      <h1>Programming</h1>
      {makeList("/programming/commonlisp", "Common Lisp")}
    </div>
  );
};

export default Programming;
