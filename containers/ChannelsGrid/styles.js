import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;
