import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Paint extends React.Component {

  render() {
    return (
      <div>
        <h1>ペイント</h1>
        <SketchField width='1024px' 
                     height='768px' 
                     tool={Tools.Pencil}
                     lineColor='black'
                     backgroundColor='white'
                     lineWidth={3}/>
      </div>
    );
  }
}

export default Paint;
