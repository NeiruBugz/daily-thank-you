import styled from 'styled-components';

export const Body = styled.main `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: papayawhip;
`
export const Title = styled.h1 `
  font-size: 2.4rem;
  font-family: serif;
`

export const Button = styled.button `
background: ${props => props.primary
  ? 'palevioletred'
  : 'white'};
color: ${props => props.primary
    ? 'white'
    : 'palevioletred'};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
cursor: pointer;
`