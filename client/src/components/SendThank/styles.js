import styled from 'styled-components';

export const Send = styled.main `
  padding: 2rem;
  line-height: 2.69rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SendTitle = styled.h2 `
  font-size: 1.8rem;
`;

export const SendForm = styled.form `
  display: flex;
  flex-direction: column;
`;

export const SendName = styled.div `
  position: relative;
  z-index: 10;
  width: 100%;
  display: ${props => props.active ? 'flex': 'block'};
  align-items: center;
  font-size: ${props => props.active ? '1.4rem' : '1rem'};
  height: ${props => props.active ? '2.2rem' : '8rem'};
`;

export const SendNameChange = styled.a `
  text-decoration: underline;
  cursor: pointer;
  margin-left: 1.5rem;
`;

export const SendInput = styled.input`
  border: 2px solid #1d1d1d;
  width: 80%;
  border-radius: 10px;
  height: ${props => props.text ? '4rem' : '1rem'};
  outline: none;
  padding: 2rem;
`;

export const SendHints = styled.div `
  position: absolute;
  width: calc(80% + 4rem);
  background: #fff;
  top: 100%;
  left: 0;
  box-shadow: -1px 15px 96px -13px rgba(112,112,112,1);
`;

export const SendHint = styled.div `
  z-index: 50;
  width: 86%;
  cursor: pointer;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const SendHintImage = styled.img `
  border-radius: 50%;
  height: ${props => props.active ? '2rem' : '1.6rem'};
  width: ${props => props.active ? '2rem' : '1.6rem'};
  margin-right: 1rem;
`;

export const SendLabel = styled.label `
  font-weight: 700;
  display: block;
  margin-top: ${props => props.text ? '4rem' : '1rem'};
`;

export const SendButton = styled.button `
  width: calc(80% + 4rem);
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .7rem 2rem;
  font-size: 1rem;
  border: 2px solid #1d1d1d;
  border-radius: 10px;
  color: #1d1d1d;
  background: transparent;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

