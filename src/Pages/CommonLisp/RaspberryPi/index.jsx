import React from 'react';
import { makeArticle } from '../../utils';

const RaspberryPi = () => {
  return (
    <div>
      <h1>Raspberry Pi 電子工作</h1>
      {makeArticle("Lチカ", require('./Articles/01-blink.md'))}
      {/* {makeArticle("タクトスイッチ", require(''))} */}
      {/* {makeArticle("センサー", require(''))} */}
    </div>
  );
};

export default RaspberryPi;
