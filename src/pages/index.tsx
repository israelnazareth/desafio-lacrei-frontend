import HomeImage from '../assets/images/home.svg'

import {
  MainContainer,
  MainContent,
  MainTitle,
  MainParagraph,
  MainButtons,
  LinkButton,
  MainImage,
  PageImage
} from "@/styles/CommomStyles"
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Desafio Lacrei'
  }, [])

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
        <MainImage>
          <PageImage src={HomeImage} alt="A health professional" />
        </MainImage>
      </MainContainer>
    </>
  )
}
