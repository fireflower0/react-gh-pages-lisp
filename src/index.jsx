import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Shared/SideBar/sidebar';

class Index extends React.Component {
  render() {
    return (
      <Sidebar />
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
