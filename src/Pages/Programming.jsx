import React from 'react';
import { makeList } from './utils';

const Programming = () => {
  const listPaths = [{
    label: 'Common Lisp',
    route: '/programming/commonlisp',
  }];
  return (
    <div>
      <h1>Programming</h1>
      {listPaths.map(l => makeList(l.route, l.label))}
    </div>
  );
};

export default Programming;
