import HomeImage from '../assets/images/home.svg'

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
  MainButtons,
  LinkButton,
  PageImage
} from "@/styles/Home"

export default function Home() {
  return (
    <>
      <MainContainer>
        <MainContent>
          <MainTitle>Boas vindas a Lacrei Saúde</MainTitle>
          <MainParagraph>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</MainParagraph>
          <MainButtons>
            <LinkButton href="/pessoa-usuaria" className="primary">Pessoa Usuária</LinkButton>
            <LinkButton href="/profissional" className="secondary">Profissional</LinkButton>
          </MainButtons>
        </MainContent>
        <PageImage src={HomeImage} alt="Home Image" />
      </MainContainer>
    </>
  )
}
