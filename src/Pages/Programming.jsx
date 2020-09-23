import React from 'react';
import { makeList } from './utils';

const Programming = () => {
  const lists = [{
    label: 'Common Lisp',
    route: '/programming/commonlisp',
  }];
  return (
    <div>
      <h1>Programming</h1>
      {lists.map(list => makeList(list.route, list.label))}
    </div>
  );
};

export default Programming;
