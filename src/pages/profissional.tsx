import ProfessionalImage from '../assets/images/professional.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  UsersParagraph,
  MainImage,
  PageImage
} from '@/styles/CommonStyles';
import { useEffect } from 'react';

export default function ProfessionalPage() {
  useEffect(() => {
    document.title = 'Profissional | Desafio Lacrei'
  }, [])

  return (
    <>
      <MainContainer>
        <MainContent>
          <MainTitle>Profissional</MainTitle>
          <UsersParagraph>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</UsersParagraph>
        </MainContent>
        <MainImage>
          <PageImage src={ProfessionalImage} alt="Five health professional" />
        </MainImage>
      </MainContainer>
    </>
  )
}
