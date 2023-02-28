import { HeaderContainer, HeaderTitle, HeaderNav, Link } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle href='/'>Lacrei</HeaderTitle>
      <HeaderNav>
        <Link href="/">Home</Link>
        <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
        <Link href="/profissional">Profissional</Link>
      </HeaderNav>
    </HeaderContainer>
  )
}
