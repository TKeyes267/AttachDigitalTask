import React from 'react';
import styled from 'styled-components';

const StyledReportCard = styled.div`
  overflow: hidden;
  border-radius: 20px;
  margin: 10px;
  width: 380px;
  height: 488px;

  position: relative;
  text-align; center;

  cursor: pointer;

  h3 {
    display: flex;
    justify-content: center;
    font-family: Georgia, serif;
    font-size: 30px;
    font-weight: 700;
    color: #F1EBDA;
    line-height: 35px;

    margin-left: 49px;
    margin-right: 35px;
    
    position: absolute;
    bottom: 62px;
  }

  pill {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #F1EBDA;
    background: #FF9A52;
    display: flex;
    justify-content: center;
    width: 69px;
    height 28px;
    border-radius: 20px;
    position: absolute;
    left: 49px;
    top: 45px;
  }

  p {
    visibility: hidden;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #F1EBDA;
    
    
    
    position: absolute;
    left: 49px;
    bottom: 45px;
  }
  p:hover {

    visibility: visible;
    
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #F1EBDA;
    
    position: absolute;
    left: 49px;
    bottom: 45px;
  }
`;

const ReportCard = ({ reportImage, alt }) => {
  return (
    <StyledReportCard>
      <img src={reportImage} alt={alt} />
      <pill>Report</pill>
      <h3>Travel & Covid-19 The Financial Loss States</h3>
      <p>READ POST</p>
    </StyledReportCard>
  );
};

export default ReportCard;
