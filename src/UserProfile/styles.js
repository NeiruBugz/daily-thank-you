import styled from 'styled-components';

export const Wrapper = styled.div `
  top: 2rem;
  padding: 4rem 2rem;
  position: fixed;
  display: flex;
  align-items: center;
`

export const UserPic = styled.img `
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`

export const Name = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
`

export const Mail = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`

export const FlexInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding-left: 1.4rem;
`