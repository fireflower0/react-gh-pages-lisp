import React from 'react';
import styled from "styled-components";

const Body = styled.div`
  padding: 10px;
  margin-top: 30px;
  background-color: #FAF0E6;
  margin-bottom: 30px;
  border-collapse: collapse;
`

const Table = styled.div`
  display: table;
`

const Row = styled.div`
  display: table-row;
`

const Div = styled(Row)`
  display: table-cell;
  margin: 15px;
  padding: 15px;
`

class Home extends React.Component {
  makeTable(header, data) {
    return (
      <Row><Div>{header}</Div><Div>{data}</Div></Row>
    );
  }

  makeLink(title, link) {
    return(
      <div><a href={link} rel="noopener noreferrer" target="_blank">{title}</a></div>
    );
  }

  makeLinkList(){
    return (
      <div>
        {this.makeLink("Qiita", "https://qiita.com/fireflower0")}
        {this.makeLink("GitHub", "https://github.com/fireflower0")}
        {this.makeLink("Twitter", "https://twitter.com/fireflower0")}
        {this.makeLink("以前作成したホームページ", "http://fireflower.s602.xrea.com/")}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Body>
          <h2>このサイトについて</h2>
          <div><a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>の勉強がてら作成したホームページです。</div>
          <div>自分が勉強したことや、ブログなんかを適当に書いていく予定。</div>
          <div>主にCommon LispやRaspberry Piについて書くことが多いと思います。</div>
          <h2>自己紹介</h2>
          <Table>
            {this.makeTable("ハンドルネーム", "fireflowre0")}
            {this.makeTable("職業", "アプリケーションエンジニア")}
            {this.makeTable("業務経験のある言語", "Common Lisp(SBCL), JavaScript(Node.js, React.js), C/C++, VB(VB6, VB.NET), Java, C#")}
            {this.makeTable("同人活動", this.makeLink("Survival Common Lisp - 現代Lisperたちの生存プログラミング術 (第8章担当)", "https://booth.pm/ja/items/1300098"))}
            {this.makeTable("所有資格", <div>
                                          <div>ITパスポート</div>
                                          <div>基本情報技術者試験</div>
                                          <div>応用情報技術者試験</div>
                                        </div>)}
            {this.makeTable("リンク", this.makeLinkList())}
          </Table>
        </Body>
      </div>
    );
  }
}

export default Home;