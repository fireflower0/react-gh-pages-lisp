import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #FAF0E6;
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  border: solid 3px #000000;
`;

const H2 = styled.h2`
  border-bottom: solid 3px black;
`;

class Graphs extends React.Component {
  render() {
    const data = [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
      { name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
      { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
      { name: 'Page E', uv: 300, pv: 2400, amt: 2400 },
      { name: 'Page F', uv: 200, pv: 2400, amt: 2400 },
    ];
    return(
      <div>
        <h1>グラフ</h1>
        <Div>
          <H2>折れ線グラフ</H2>
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Div>
      </div>
    );
  }
}

export default Graphs;
