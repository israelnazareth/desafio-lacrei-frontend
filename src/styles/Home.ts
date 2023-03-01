import styled from "styled-components";
import Link from "next/link";
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

export const PageImage = styled(Image)`
  width: 100%;
  height: 26rem;
`;
