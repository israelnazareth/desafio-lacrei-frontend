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
    transition: all 0.2s ease 0s;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;

  a {
    color: #313131;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.875rem;
    transition: all 0.2s ease 0s;

    &:hover {
      opacity: 0.7;
    }
  }



  .selected {
    color: #018762;
  }
`;
