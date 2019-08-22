import React from 'react';
import { makeLinkList, makeArticle } from '../../../utils';

class GettingStarted extends React.Component {
  makeReferences(){
    return(
      <ul>
        {makeLinkList("Common Lisp HyperSpec", "http://www.lispworks.com/documentation/HyperSpec/Front/index.htm")}
        {makeLinkList("逆引きCommon Lisp", "https://lisphub.jp/common-lisp/cookbook/")}
        {makeLinkList("ANSI Common Lisp", "http://www.paulgraham.com/acl.html")}
        {makeLinkList("Common Lisp 入門 (xyzzy Lisp Programming)", "http://www.nct9.ne.jp/m_hiroi/xyzzy_lisp.html")}
        {makeLinkList("いまから始めるCommon Lisp (Qiita)", "https://qiita.com/t-sin/items/054c2ff315ec3b9d3bdc")}
        {makeLinkList("Practical Common Lisp", "http://www.gigamonkeys.com/book/")}
        {makeLinkList("On Lisp", "http://www.asahi-net.or.jp/~kc7k-nd/onlispjhtml/")}
        {makeLinkList("Land of Lisp", "http://landoflisp.com/")}
        {makeLinkList("はじめてのLisp関数型プログラミング", "https://gihyo.jp/book/2016/978-4-7741-8035-9")}
        {makeLinkList("The Common Lisp Cookbook", "http://cl-cookbook.sourceforge.net/index.html")}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Common Lisp入門</h1>
        <div>弱小Common Lisperが学習用に作成した入門サイトです。</div>
        <div>本格的に勉強したい人は以下の参考文献を直接読んだ方が良いと思います。</div>
        <div>それでも良いという方、私と一緒に勉強しましょう。</div>
        <div>ちなみに、Linux(Ubuntu)での開発を想定しています。</div>
        <h2>参考文献</h2>
        {this.makeReferences()}
        {makeArticle("第1章 開発環境構築", require("./Articles/01-foreword.md"))}
        {makeArticle("第2章 アトムとコンスセルとリスト", require("./Articles/02-list.md"))}
        {makeArticle("第3章 連想リストと属性リスト", require("./Articles/03-alist-plist.md"))}
        {makeArticle("第4章 変数と定数", require("./Articles/04-variables-constants.md"))}
        {makeArticle("第5章 述語関数", require("./Articles/05-predicate-function.md"))}
        {makeArticle("第6章 条件分岐", require("./Articles/06-conditional-branching.md"))}
        {makeArticle("第7章 繰り返し", require("./Articles/07-loop.md"))}
        {makeArticle("第8章 シーケンス", require("./Articles/08-sequence.md"))}
      </div>
    );
  }
}

export default GettingStarted;
