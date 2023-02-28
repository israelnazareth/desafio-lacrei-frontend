import { FooterContainer, FooterLinks, FooterSocials, FooterChallenge } from './styles';

import Link from 'next/link';
import Image from 'next/image';

import InstagramLogo from '../../assets/icons/InstagramLogo.svg';
import FacebookLogo from '../../assets/icons/FacebookLogo.svg';
import LinkedinLogo from '../../assets/icons/LinkedinLogo.svg';

export default function Header() {
  return (
    <>
      <FooterContainer>
        <FooterLinks>
          <Link href="/">Home</Link>
          <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
          <Link href="/profissional">Profissional</Link>
        </FooterLinks>
        <FooterSocials>
          <Link href="https://www.instagram.com/lacrei.saude">
            <Image src={InstagramLogo} alt="Instagram Logo" width={32} />
          </Link>
          <Link href="https://www.facebook.com/lacrei.saude">
            <Image src={FacebookLogo} alt="Facebook Logo" width={32} />
          </Link>
          <Link href="https://www.linkedin.com/company/lacrei">
            <Image src={LinkedinLogo} alt="Linkedin Logo" width={32} />
          </Link>
        </FooterSocials>
        <FooterChallenge>Desafio Front-end Lacrei</FooterChallenge>
      </FooterContainer>
    </>
  )
}