import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0;
  
  @media (min-width: 520px) {
    align-items: center;
    padding: 2rem 2rem 0;
  }

  @media (min-width: 1040px) {
    flex-direction: row;
    padding: 4rem 4rem 0;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const MainContent = styled.div`
  max-width: 535px;
`;

export const MainTitle = styled.h2`
  font-size: 1.5rem;
  color: #1F1F1F;
  
  @media (min-width: 520px) {
    font-size: 2rem;
  }

  @media (min-width: 1040px) {
    font-size: 3rem;
  }
`;

export const MainParagraph = styled.p`
  margin-top: 0.875rem;
  font-size: 0.875rem;
  color: #515151;
  border-left: 5px solid #018762;
  padding-left: 1rem;
  line-height: 1.25rem;

  @media (min-width: 520px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;
  }
`;

export const MainImage = styled.div`
  display: flex;
`;

export const PageImage = styled(Image)`
  width: 100%;
  height: 26rem;
`;
