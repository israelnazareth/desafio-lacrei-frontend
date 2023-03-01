import UserImage from '../assets/images/user.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  UsersParagraph,
  MainImage,
  PageImage
} from '@/styles/CommonStyles';
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
          <UsersParagraph>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</UsersParagraph>
        </MainContent>
        <MainImage>
          <PageImage src={UserImage} alt="Three people using smartphones" />
        </MainImage>
      </MainContainer>
    </>
  )
}
