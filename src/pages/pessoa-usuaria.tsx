import UserImage from '../assets/images/user.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
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
        <PageImage src={UserImage} alt="Three people using smartphones" />
      </MainContainer>
    </>
  )
}
