import { HeaderContainer, HeaderNav } from './styles';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderContainer>
      <Link href='/'>Lacrei</Link>
      <HeaderNav>
        <Link href="/">Home</Link>
        <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
        <Link href="/profissional">Profissional</Link>
      </HeaderNav>
    </HeaderContainer>
  )
}
