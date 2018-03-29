import styled from 'styled-components';

export const Wrapper = styled.div `
  top: 2rem;
  padding: 4rem 2rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameInput = styled.input `
  padding: 0.5rem;
  margin: 0.5rem;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

export const MainInput = styled.input `
padding: 0.5rem;
margin: 0.5rem;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
height: 6rem;
`

export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1rem;
  margin: 1rem;
  padding: .5rem 1.25rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  align-self: flex-end;
`;