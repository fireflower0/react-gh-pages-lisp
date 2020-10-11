import React from 'react';
import { makeArticle } from '../../utils';

const RaspberryPi = () => {
  const articles = [{
    id: 1,
    label: '第1章 Lチカ',
    route: require('./Articles/01-blink.md'),
  }];
  return (
    <div>
      <h1>Raspberry Pi 電子工作</h1>
      {articles.map(article => makeArticle(article))}
      {/* {makeArticle("タクトスイッチ", require(''))} */}
      {/* {makeArticle("センサー", require(''))} */}
    </div>
  );
};

export default RaspberryPi;
