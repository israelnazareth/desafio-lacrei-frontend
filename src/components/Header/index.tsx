import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { HeaderContainer, HeaderNav } from './styles';

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
    <HeaderContainer>
      <Link href='/'>Lacrei</Link>
      <HeaderNav>
        <Link href={paths.home} className={selectedPath(paths.home)}>
          Home
        </Link>
        <Link href={paths.user} className={selectedPath(paths.user)}>
          Pessoa Usuária
        </Link>
        <Link href={paths.prof} className={selectedPath(paths.prof)}>
          Profissional
        </Link>
      </HeaderNav>
    </HeaderContainer>
  )
}
