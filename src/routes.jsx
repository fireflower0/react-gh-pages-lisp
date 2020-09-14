import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Programming from './Pages/Programming';
import CommonLisp from './Pages/Programming/CommonLisp';
import GettingStarted from './Pages/Programming/CommonLisp/GettingStarted';
import Game from './Pages/Programming/CommonLisp/Game';
import Gui from './Pages/Programming/CommonLisp/Gui';
import WebApp from './Pages/Programming/CommonLisp/WebApp';
import RaspberryPi from './Pages/Programming/CommonLisp/RaspberryPi';

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/home',
  exact: false,
  component: Home,
}, {
  path: '/blog',
  exact: false,
  component: Blog,
}, {
  path: '/programming',
  exact: true,
  component: Programming,
}, {
  path: '/programming/commonlisp',
  exact: true,
  component: CommonLisp,
}, {
  path: '/programming/commonlisp/gettingstarted',
  exact: false,
  component: GettingStarted,
}, {
  path: '/programming/commonlisp/gui',
  exact: false,
  component: Gui,
}, {
  path: '/programming/commonlisp/game',
  exact: false,
  component: Game,
}, {
  path: '/programming/commonlisp/raspberrypi',
  exact: false,
  component: RaspberryPi,
}, {
  path: '/programming/commonlisp/webapp',
  exact: false,
  component: WebApp,
}];
