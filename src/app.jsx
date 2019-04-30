import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import Sidebar from './Shared/SideBar/sidebar';
import Home from './Pages/Home/home';
import Blog from './Pages/Blog/blog';
import Programming from './Pages/Programming/programming';
import CommonLisp from './Pages/Programming/CommonLisp/commonlisp';
import Game from './Pages/Programming/CommonLisp/Game/game';

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const Body = styled.div`
  height: 100vh;
  width: 1000px;
  margin-right: auto;
  margin-left : auto;
`;

const Text = styled.div`
  padding-left: 8px;
`;

class App extends React.Component {
  SubMenuItem (child) {
    var list = [];
    for (let i = 0; i < child.length; i++){
      list.push(<Nav key={i} id={child[i][0]}>
                  <Text>{child[i][1]}</Text>
                </Nav>);
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
    return (
      <Router>
        <AppContainer>
          <Sidebar />
          <Body>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/programming/commonlisp/game' component={Game} />
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
