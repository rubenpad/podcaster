import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const SectionTitle = styled.h1`
  color: #fff;
  margin: 2rem 0 2rem 1.5rem;
`;

// Player styles

export const ButtonBack = styled(FaArrowLeft)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  top: 0;
  left: 2rem;
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
  font-size: 1.8rem;
  color: #fff;
`;

export const Cover = styled.img`
  width: 240px;
  height: 240px;
  margin: 2rem 0;
  object-fit: cover;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
`;
