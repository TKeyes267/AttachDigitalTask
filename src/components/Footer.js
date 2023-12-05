import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';

const StyledFooter = styled.footer`
  height: 120px;
  background: #124848;
  display: flex;
`;

const StyledInner = styled.div`
  height: 120px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-content: center;

  p {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #f1ebda;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledInner>
        <p>
          Diversity Travel Ltd. Registered in England and Wales. Registered
          Number: 05993481
        </p>
        <p>Website by Attach Digital</p>
      </StyledInner>
    </Container>
  </StyledFooter>
);

export default Footer;
