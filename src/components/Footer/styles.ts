import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #B0E0D3;
  position: absolute;
  bottom: 0;
  margin: 0px 1rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  gap: 0.5rem;
  width: stretch;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: #000;
    text-decoration: none;
    font-size: 0.875rem;
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