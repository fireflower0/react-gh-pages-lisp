import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavIcon } from 'react-sidenav';
import { withRR4 } from "react-sidenav/withRR4";
import { Icon } from 'react-icons-kit';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_keyboard } from 'react-icons-kit/md/ic_keyboard';
import { ic_assignment } from 'react-icons-kit/md/ic_assignment'
import { AppContainer, Navigation, Body } from './containers';
import Home from '../Pages/home';
import Blog from '../Pages/Blog/blog';
import Programming from '../Pages/Programming/programming';
import CommonLisp from '../Pages/Programming/commonlisp';

const Text = styled.div`
  padding-left: 8px;
`;

const theme = {
  hoverBgColor:       "#f5f5f5",
  selectionBgColor:   "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

class App extends React.Component {
  SubMenuItem (child) {
    var list = [];
    for (let i = 0; i < child.length; i++){
      list.push(<Nav key={i} id={child[i][0]}><Text>{child[i][1]}</Text></Nav>);
    }
    return list;
  }

  MenuItem(parent, child) {
    return (
      <Nav id={parent[0]}>
        <NavIcon>
          <Icon icon={parent[1]} />
        </NavIcon>
        <Text>{parent[2]}</Text>
        { child !== null ? this.SubMenuItem(child) : null }
      </Nav>
    );
  }

  render() {
    const SideNav = withRR4();
    return (
      <Router>
        <AppContainer>
          <Navigation>
            <SideNav theme={theme} defaultSelectedPath={"home"}>
              {this.MenuItem(["home", ic_home, "Home"], null)}
              {this.MenuItem(["blog", ic_assignment, "Blog"], null)}
              {this.MenuItem(["programming", ic_keyboard, "Programming"],
                             [["commonlisp", "Common Lisp"]])}
            </SideNav>
          </Navigation>
          <Body>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/programming/commonlisp' component={CommonLisp} />
              <Route path='/programming' exact component={Programming} />
              <Route path='/' exact component={Home} />
            </Switch>
          </Body>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
