import React from 'react';
import { withRouter } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p>{props.id} smurf id</p>
      <div><button onClick={() => props.history.push(`/remove/${props.id}`)}>Remove</button> 
</div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);

