import styled from 'styled-components';

export const Main = styled.main `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1d1d1d;
`

export const Title = styled.h1 `
  font-size: 2.6rem;
  color: #fdfdfd;
  font-weight: 400;
`

export const LoginButton = styled.a `
  width: 18rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .7rem;
  font-size: 1rem;
  border: 4px solid #fdfdfd;
  border-radius: 10px;
  color: #fdfdfd;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`

export const GoogleLogo = styled.img `
  width: 1.2rem;
  padding-right: 1rem;
  text-align: center;
`