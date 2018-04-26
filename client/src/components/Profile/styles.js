import styled from 'styled-components';

export const ProfileWrapper = styled.main `
`;

export const UserInfo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  padding: 1rem;
  height: 6rem;
  text-align: center;
`;

export const UserImage = styled.img `
  border-radius: 50%;
  margin: auto;
  width: 6rem;
  height: 6rem;
`;

export const UserContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const UserName = styled.h4 `
  margin: 0;
  padding: .6rem;
`;

export const UserEmail = styled.h4 `
  margin: 0;
  padding: .6rem;
`;
