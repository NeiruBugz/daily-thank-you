import styled from 'styled-components';

export const Menu = styled.ul `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  background: #8262FF;
`

export const MenuItem = styled.a `
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fdfdfd;
  padding: 2rem;
  cursor: pointer;
  text-decoration: none;
`