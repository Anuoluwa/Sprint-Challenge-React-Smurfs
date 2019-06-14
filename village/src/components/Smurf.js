import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from "styled-components";

const CardWrapper = styled.div`

width: 50%;
padding: 0 7rem;
border: 2px solid gray;

h3 {
  font-weight: bolder;
  font-size: 2rem;
  padding: 0;
  color: #40464F;
  margin: 0.5rem 0 1.5rem 0;
}

strong {
  font-size: 1.6rem;
  margin: 0.2rem 0;
  color: #7C7E80;
  font-weight: bolder;
}

p {
  font-size: 1.4rem;
  margin: 1rem 0;
  color: #7C7E80;
  font-weight: bold;
}


`
const Button = styled.button`
  font-size: 1em;
  margin: 0.5rem 1rem 1rem 1rem;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid palevioletred;
;
`;
const Smurf = props => {
  return (
    <CardWrapper className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div><Button onClick={() => props.history.push(`/remove/${props.id}`)}>Remove</Button> 
</div>
    </CardWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);

