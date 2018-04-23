import React from 'react';
import {Thank, ThankHeader, AuthorImage, AuthorName, ThankContent} from './styles';

export const ThankItem = () => {
  return (
    <Thank read>
      <ThankHeader>
        <AuthorImage src='https://www.w3schools.com/howto/img_avatar.png'/>
        <AuthorName>Author Name</AuthorName>
      </ThankHeader>
      <ThankContent>
        Спасибо за носки :)
      </ThankContent>
    </Thank>
  )
};