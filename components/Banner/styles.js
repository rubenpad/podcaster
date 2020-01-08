import styled, { css } from 'styled-components';

export const StyledBanner = styled.div`
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ChannelTitle = styled.h1`
  font-size: 2.4rem;
  margin-top: 1.5rem;
  color: #fff;
`;

export const ChannelDescription = styled.p`
  font-size: 1.4rem;
  color: #fff;
  opacity: 0.9;
`;
