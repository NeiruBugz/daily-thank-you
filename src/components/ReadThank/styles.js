import styled from 'styled-components';

export const ReadWrapper = styled.main `
  display: flex;
  flex-direction: column;
`

export const Thank = styled.div `
  margin: 1rem;
  padding: 1rem;
  height: 8rem;
  border-radius: 10px;
  align-self: ${props => props.read ? 'flex-start' : 'flex-end'};
  background: ${props => props.read ? '#64e' : '#8262FF'}
`

export const ThankHeader = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: .6rem;
`

export const AuthorImage = styled.img `
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
`

export const AuthorName = styled.h5 `
  color: #fdfdfd;
`

export const ThankContent = styled.p `
  color: #fdfdfd;
`