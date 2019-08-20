import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Shared/SideBar';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Programming from './Pages/Programming';
import CommonLisp from './Pages/Programming/CommonLisp';
import GettingStarted from './Pages/Programming/CommonLisp/GettingStarted';
import Game from './Pages/Programming/CommonLisp/Game';
import Gui from './Pages/Programming/CommonLisp/Gui';
import RaspberryPi from './Pages/Programming/CommonLisp/RaspberryPi';

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
  margin-left: auto;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Sidebar />
          <Body>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/programming/commonlisp/raspberrypi' component={RaspberryPi} />
              <Route path='/programming/commonlisp/game' component={Game} />
              <Route path='/programming/commonlisp/gui' component={Gui} />
              <Route path='/programming/commonlisp/gettingstarted' component={GettingStarted} />
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
