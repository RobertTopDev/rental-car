import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`;

export const FavoritesMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
  height: 100%;

  position: relative;
`;
