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
