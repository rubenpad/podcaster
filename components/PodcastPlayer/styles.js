import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const ButtonBack = styled(FaArrowLeft)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
`;

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PlayerControls = styled.audio`
  max-width: 100%;
  width: 400px;
  position: absolute;
  bottom: 0;
`;

export const NowPlaying = styled.div`
  width: 100%;
  height: 400px;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EpisodeTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
`;

export const Cover = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 3px;
  margin: 2rem 0;
  object-fit: cover;
`;
