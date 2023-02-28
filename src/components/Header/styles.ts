import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #EEE;
  padding: 0.5rem 1rem;
  width: 100%;

  a {
    text-decoration: none;
    color: #018762;
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.875rem;
  }
`;
