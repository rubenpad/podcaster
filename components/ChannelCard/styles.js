import styled from 'styled-components';

export const Channel = styled.div`
  display: block;
  border-radius: 4px;
  margin-bottom: 0.5em;
  overflow: hidden;
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-top: 0.5rem;
  padding: 0 1rem 0.5rem 1rem;
  text-align: left;
  color: #fff;
`;
