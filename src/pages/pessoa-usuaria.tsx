import UserImage from '../assets/images/user.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
  MainImage,
  PageImage
} from '@/styles/CommonPages';
import { useEffect } from 'react';

export default function UserPage() {
  useEffect(() => {
    document.title = 'Pessoa Usuária | Desafio Lacrei'
  }, [])

  return (
    <>
      <MainContainer>
        <MainContent>
          <MainTitle>Pessoa Usuária</MainTitle>
          <MainParagraph>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</MainParagraph>
        </MainContent>
        <MainImage>
          <PageImage src={UserImage} alt="Three people using smartphones" />
        </MainImage>
      </MainContainer>
    </>
  )
}
