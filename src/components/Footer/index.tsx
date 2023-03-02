import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import InstagramLogo from '../../assets/icons/InstagramLogo.svg';
import FacebookLogo from '../../assets/icons/FacebookLogo.svg';
import LinkedinLogo from '../../assets/icons/LinkedinLogo.svg';

import { FooterContainer, FooterLinks, FooterSocials, FooterChallenge } from './styles';

export default function Header() {
  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);

  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname]);

  const paths = {
    home: '/',
    user: '/pessoa-usuaria',
    prof: '/profissional',
  }

  function selectedPath(path: string) {
    return pathname === path ? 'selected' : '';
  }

  return (
    <>
      <FooterContainer>
        <FooterLinks>
          <Link href={paths.home} className={selectedPath(paths.home)}>
            Home
          </Link>
          <Link href={paths.user} className={selectedPath(paths.user)}>
            Pessoa Usuária
          </Link>
          <Link href={paths.prof} className={selectedPath(paths.prof)}>
            Profissional
          </Link>
        </FooterLinks>
        <FooterSocials>
          <Link href="https://www.instagram.com/lacrei.saude" target="_blank">
            <Image src={InstagramLogo} alt="Instagram Logo" width={32} />
          </Link>
          <Link href="https://www.facebook.com/lacrei.saude" target="_blank">
            <Image src={FacebookLogo} alt="Facebook Logo" width={32} />
          </Link>
          <Link href="https://www.linkedin.com/company/lacrei" target="_blank">
            <Image src={LinkedinLogo} alt="Linkedin Logo" width={32} />
          </Link>
        </FooterSocials>
        <FooterChallenge>Desafio Front-end Lacrei</FooterChallenge>
      </FooterContainer>
    </>
  )
}