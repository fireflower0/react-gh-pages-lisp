import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavIcon } from 'react-sidenav';
import { withRR4 } from "react-sidenav/withRR4";
import { Icon } from 'react-icons-kit';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_keyboard } from 'react-icons-kit/md/ic_keyboard';
import { AppContainer, Navigation, Body } from './containers';

import Home from './home';
import Programming from './programming';

const Text = styled.div`
  padding-left: 8px;
`;

const theme = {
  hoverBgColor:       "#f5f5f5",
  selectionBgColor:   "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

class App extends React.Component {
  MenuItem(id, icon, text){
    return (
      <Nav id={id}>
        <NavIcon>
          <Icon icon={icon} />
        </NavIcon>
        <Text>{text}</Text>
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
              {this.MenuItem("home", ic_home, "Home")}
              {this.MenuItem("programming", ic_keyboard, "Programming")}
            </SideNav>
          </Navigation>
          <Body>
            <Switch>
              <Route path='/programming' component={Programming} />
              <Route path='/home' component={Home} />
              <Route path='/' exact component={Home} />
            </Switch>
          </Body>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
