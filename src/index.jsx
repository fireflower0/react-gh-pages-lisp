import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class Index extends React.Component {
  componentDidMount(){
    document.title = "fireflower0's HomePage";
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#DCDCDC"; // Set the style
  }

  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
