import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.main`
  padding: 1rem 1rem 0;
`;

export const MainContent = styled.div``;

export const MainTitle = styled.h2`
  font-size: 1.5rem;
  color: #1F1F1F;
`;

export const MainParagraph = styled.p`
  margin-top: 0.875rem;
  font-size: 0.875rem;
  color: #515151;
  border-left: 5px solid #018762;
  padding-left: 1rem;
  line-height: 1.25rem;
`;

export const PageImage = styled(Image)`
  width: 100%;
  height: 26rem;
`;
