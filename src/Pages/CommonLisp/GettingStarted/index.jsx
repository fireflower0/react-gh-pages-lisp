import React from 'react';
import { makeLinkList, makeArticle } from '../../utils';

const GettingStarted = () => {
  const referenceLinks = [{
    label: 'Common Lisp HyperSpec',
    url: 'http://www.lispworks.com/documentation/HyperSpec/Front/index.htm',
  }, {
    label: '逆引きCommon Lisp',
    url: 'https://lisphub.jp/common-lisp/cookbook/',
  }, {
    label: 'ANSI Common Lisp',
    url: 'http://www.paulgraham.com/acl.html',
  }, {
    label: 'Common Lisp 入門 (xyzzy Lisp Programming)',
    url: 'http://www.nct9.ne.jp/m_hiroi/xyzzy_lisp.html',
  }, {
    label: 'いまから始めるCommon Lisp (Qiita)',
    url: 'https://qiita.com/t-sin/items/054c2ff315ec3b9d3bdc',
  }, {
    label: 'Practical Common Lisp',
    url: 'http://www.gigamonkeys.com/book/',
  }, {
    label: 'On Lisp',
    url: 'http://www.asahi-net.or.jp/~kc7k-nd/onlispjhtml/',
  }, {
    label: 'Land of Lisp',
    url: 'http://landoflisp.com/',
  }, {
    label: 'はじめてのLisp関数型プログラミング',
    url: 'https://gihyo.jp/book/2016/978-4-7741-8035-9',
  }, {
    label: 'The Common Lisp Cookbook',
    url: 'http://cl-cookbook.sourceforge.net/index.html',
  }];

  const articles = [{
    label: '第1章 開発環境構築',
    route: require('./Articles/01-foreword.md'),
  }, {
    label: '第2章 アトムとコンスセルとリスト',
    route: require('./Articles/02-list.md'),
  }, {
    label: '第3章 連想リストと属性リスト',
    route: require('./Articles/03-alist-plist.md'),
  }, {
    label: '第4章 変数と定数',
    route: require('./Articles/04-variables-constants.md'),
  }, {
    label: '第5章 述語関数',
    route: require('./Articles/05-predicate-function.md'),
  }, {
    label: '第6章 条件分岐',
    route: require('./Articles/06-conditional-branching.md'),
  }, {
    label: '第7章 繰り返し',
    route: require('./Articles/07-loop.md'),
  }, {
    label: '第8章 シーケンス',
    route: require('./Articles/08-sequence.md'),
  }];

  return (
    <div>
      <h1>Common Lisp入門</h1>
      <div>弱小Common Lisperが学習用に作成した入門サイトです。</div>
      <div>本格的に勉強したい人は以下の参考文献を直接読んだ方が良いと思います。</div>
      <div>それでも良いという方、私と一緒に勉強しましょう。</div>
      <div>ちなみに、Linux(Ubuntu)での開発を想定しています。</div>
      <h2>参考文献</h2>
      <ul>
        {referenceLinks.map(link => makeLinkList(link))}
      </ul>
      {articles.map(article => makeArticle(article))}
    </div>
  );
};

export default GettingStarted;
