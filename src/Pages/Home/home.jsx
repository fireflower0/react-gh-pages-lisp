import React from 'react';
import styled from "styled-components";

const Body = styled.div`
  padding: 2.5%;
  background-color: #000;
  color: #fff;
`;

class Home extends React.Component {
  render() {
    return (
      <Body>
       <h1>Home</h1>
      </Body>
    );
  }
}

export default Home;
