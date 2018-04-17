import styled from 'styled-components';

export const Send = styled.main `
  padding: 2rem;
  line-height: 2.69rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SendTitle = styled.h2 `
  font-size: 1.8rem;
`

export const SendForm = styled.form `
  display: flex;
  flex-direction: column;
`

export const SendInput = styled.input`
  border: 2px solid #1d1d1d;
  border-radius: 10px;
  height: ${props => props.text ? '4rem': '1rem'};
  outline: none;
  padding: 1rem;
`

export const SendLabel = styled.label`
  font-weight: 700;
`

export const SendButton = styled.button `
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .7rem;
  font-size: 1rem;
  border: 2px solid #1d1d1d;
  border-radius: 10px;
  color: #1d1d1d;
  background: transparent;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`

