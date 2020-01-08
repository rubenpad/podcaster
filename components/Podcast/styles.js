import styled from 'styled-components';

export const ContainerGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

export const Title = styled.h2`
  margin: 1rem 1.5rem;
`;
