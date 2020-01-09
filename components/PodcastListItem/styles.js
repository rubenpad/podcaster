import styled from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';

export const PlayButton = styled(FaPlayCircle)`
  width: 30px;
  height: 20px;
  margin-right: 0.5rem;
  color: #fff;
`;

export const Action = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const PodcastTitle = styled.h3`
  align-self: flex-start;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Description = styled.div``;

export const TextDescription = styled.p`
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
`;

export const StyledPodcastCard = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 3px;
  transition: all 0.5s ease;

  &:hover {
    background-color: hsla(0, 0%, 50%, 0.1);
    * {
      color: #1db954;
    }
  }
`;
