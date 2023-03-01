import UserImage from '../assets/images/user.svg';

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
  PageImage
} from '@/styles/UserPage';

export default function UserPage() {
  return (
    <>
      <MainContainer>
        <MainContent>
          <MainTitle>Pessoa Usuária</MainTitle>
          <MainParagraph>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</MainParagraph>
        </MainContent>
        <PageImage src={UserImage} alt="User Image Page" />
      </MainContainer>
    </>
  )
}
