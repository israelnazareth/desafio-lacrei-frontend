import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #EEE;
  padding: 0.5rem 1rem;
`;

export const HeaderTitle = styled.a`
  text-decoration: none;
  color: #018762;
  font-weight: 700;
  font-size: 2rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 0.875rem;
`;
