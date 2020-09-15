import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Shared/SideBar';
import { routes } from './routes';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const Body = styled.div`
  height: 100vh;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
`;

const App = () => {
  useEffect(() => {
    document.title = "fireflower0's HomePage";
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#DCDCDC"; // Set the style
  }, []);

  const makeRoutes = (route) => (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  );

  return (
    <AppContainer>
      <Router>
        <Sidebar />
        <Body>
          <Switch>
            {routes.map(route => makeRoutes(route))}
          </Switch>
        </Body>
      </Router>
    </AppContainer>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
