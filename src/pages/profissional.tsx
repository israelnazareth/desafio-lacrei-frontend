import ProfessionalImage from '../assets/images/professional.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
  PageImage
} from '@/styles/CommonPages';
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
          <MainParagraph>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</MainParagraph>
        </MainContent>
        <PageImage src={ProfessionalImage} alt="Five health professional" />
      </MainContainer>
    </>
  )
}
