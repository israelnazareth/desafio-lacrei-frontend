import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #B0E0D3;
  margin: 0px 1rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  gap: 0.5rem;
  width: stretch;

  @media (min-width: 520px) {
    justify-content: space-between;
    padding: 2rem 0px 0.5rem;
    height: 10rem;
    margin: 0 2rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: #313131;
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.2s ease 0s;
    
    &:hover {
      opacity: 0.7;
    }
  }

  .selected {
    font-weight: bold;
  }

  @media (min-width: 520px) {
    flex-direction: row;
    gap: 2.5rem;
    
    a {
      font-size: 1rem;
    }
  }
`

export const FooterSocials = styled.div`
  display: flex;
  gap: 2rem;

  img {
    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const FooterChallenge = styled.div`
  font-size: 0.75rem;
  color: #515151;
`