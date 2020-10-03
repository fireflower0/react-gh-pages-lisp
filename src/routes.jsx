import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Programming from './Pages/Programming';
import CommonLisp from './Pages/CommonLisp';
import GettingStarted from './Pages/CommonLisp/GettingStarted';
import Game from './Pages/CommonLisp/Game';
import Gui from './Pages/CommonLisp/Gui';
import WebApp from './Pages/CommonLisp/WebApp';
import RaspberryPi from './Pages/CommonLisp/RaspberryPi';

export const routes = [{
  id: 1,
  path: '/',
  exact: true,
  component: Home,
}, {
  id: 2,
  path: '/home',
  exact: false,
  component: Home,
}, {
  id: 3,
  path: '/blog',
  exact: false,
  component: Blog,
}, {
  id: 4,
  path: '/programming',
  exact: true,
  component: Programming,
}, {
  id: 5,
  path: '/programming/commonlisp',
  exact: true,
  component: CommonLisp,
}, {
  id: 6,
  path: '/programming/commonlisp/gettingstarted',
  exact: false,
  component: GettingStarted,
}, {
  id: 7,
  path: '/programming/commonlisp/gui',
  exact: false,
  component: Gui,
}, {
  id: 8,
  path: '/programming/commonlisp/game',
  exact: false,
  component: Game,
}, {
  id: 9,
  path: '/programming/commonlisp/raspberrypi',
  exact: false,
  component: RaspberryPi,
}, {
  id: 10,
  path: '/programming/commonlisp/webapp',
  exact: false,
  component: WebApp,
}];
