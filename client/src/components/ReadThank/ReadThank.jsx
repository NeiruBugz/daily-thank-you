import React from 'react'
import { ReadWrapper, Thank, ThankHeader, ThankContent, AuthorImage, AuthorName } from './styles';
import Header from '../Header/Header';


export default class ReadThank extends React.Component {
  render() {
    return (
      <ReadWrapper>
        <Header/>
        <Thank read>
          <ThankHeader>
            <AuthorImage src='https://www.w3schools.com/howto/img_avatar.png'/>
            <AuthorName>Author Name</AuthorName>
          </ThankHeader>
          <ThankContent>
            Спасибо за носки :)
          </ThankContent>
        </Thank>
        <Thank>
          <ThankHeader>
            <AuthorImage src='https://www.w3schools.com/howto/img_avatar.png'/>
            <AuthorName>Author Name</AuthorName>
          </ThankHeader>
          <ThankContent>
            Спасибо за чай &lt;3
          </ThankContent>
        </Thank>
      </ReadWrapper>
    );
  }
}