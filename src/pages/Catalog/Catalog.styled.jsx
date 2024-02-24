import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`;

export const CarsMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
`;
