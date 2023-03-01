import styled from "styled-components";
import Link from "next/link";
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
  border-left: none;
  padding-left: 0;
  line-height: 1.25rem;

  @media (min-width: 520px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.5rem;
    margin-top: 2rem;
    line-height: 2rem;
  }
`;

export const UsersParagraph = styled(MainParagraph)`
  border-left: 5px solid #018762;
  padding-left: 1rem;
`;

export const MainButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 1rem;

  .primary {
    padding: 0.75rem 2rem;
    background-color: #018762;
    color: white;
    border: none;
  }

  .secondary {
    padding: 0.625rem 2.75rem;
    background-color: #FFF;
    color: #018762;
    border: 2px solid rgb(1, 135, 98);
  }

  @media (min-width: 520px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 453px;
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.7;
  }
`;

export const MainImage = styled.div`
  display: flex;
`;

export const PageImage = styled(Image)`
  width: 100%;
  height: 26rem;
`;
