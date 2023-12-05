import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import ReportCard from './ReportCard';
import planeWing from '../images/planeWing.png';
import palmTrees from '../images/palmTrees.png';
import childrenSmiling from '../images/childrenSmiling.png';

const StyledReports = styled.section`
  background: #f1ebda;
  display: flex;
  justify-content: center;

  h2 {
    display: flex;
    justify-content: center;
    font-family: Georgia, serif;
    font-size: 40px;
    font-weight: 700;
    color: #124848;
    line-height: 58px;
    margin-bottom: 53px;
  }
`;

const StyledCards = styled.div`
  display: flex;
  justify-content: center;
`;

const Reports = () => (
  <StyledReports>
    <Container>
      <h2>Reports</h2>
      <StyledCards>
        <ReportCard reportImage={palmTrees} alt={'Palm Trees'} />
        <ReportCard reportImage={childrenSmiling} alt={'Children Smiling'} />
        <ReportCard reportImage={planeWing} alt={'Plane Wing'} />
      </StyledCards>
    </Container>
  </StyledReports>
);

export default Reports;
