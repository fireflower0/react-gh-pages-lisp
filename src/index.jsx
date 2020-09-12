import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const Index = () => {
  useEffect(() => {
    document.title = "fireflower0's HomePage";
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#DCDCDC"; // Set the style
  }, []);

  return (
    <App />
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
