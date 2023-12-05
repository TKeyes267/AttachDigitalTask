import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';

import diversityTravelLogo from '../images/diversityTravelLogo.svg';

const StyledHeader = styled.header`
  background: #f1ebda;
`;

const StyledInner = styled.div``;

const StyledLogo = styled.img`
  width: 99px;
  height: 99px;
  margin-top: 10px;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledInner>
        <StyledLogo src={diversityTravelLogo} alt="Logo" />
      </StyledInner>
    </Container>
  </StyledHeader>
);

export default Header;
