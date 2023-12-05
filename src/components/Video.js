import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins } from '../styles';

const StyledVideo = styled.section`
  ${sectionMargins()};
`;
const StyledInner = styled.section`
  display: flex;
  justify-content: center;

  iframe {
    overflow: hidden;
    border-radius: 20px;
  }
`;

const Video = () => {
  return (
    <StyledVideo>
      <Container>
        <StyledInner>
          <iframe
            width="980"
            height="541"
            src="https://www.youtube.com/embed/-NRYsckU9W4?si=z7fg1ago3dpFpNOe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </StyledInner>
      </Container>
    </StyledVideo>
  );
};

export default Video;
