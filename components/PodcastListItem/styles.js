import styled from 'styled-components';

export const SectionTitle = styled.h1`
  color: #fff;
  margin: 2rem 0 2rem 1.5rem;
`;

export const PlayButton = styled.button`
  padding: 1.5rem 2rem;
  background: #1db954;
  border-radius: 3px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PodcastTitle = styled.h3`
  margin-left: 1rem;
  font-size: 1.6rem;
  color: #fff;
`;

export const StyledPodcastCard = styled.a`
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 3px;
  transition: all 0.5s ease;
  user-select: none;

  &:hover {
    background-color: hsla(0, 0%, 50%, 0.1);
  }
`;
