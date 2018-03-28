import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section `
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input `
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>ЦМОК</Title>
        <div>
          <Input placeholder="@mxstbr" type="text"/>
          <Input value="@geelen" type="text"/>
          <Button title='Normal'/>
          <Button primary title='Primary'/>
        </div>
      </Wrapper>
    );
  }
}
