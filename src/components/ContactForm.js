import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins } from '../styles';

const StyledContactForm = styled.section`
  ${sectionMargins()};
`;

const StyledInner = styled.section`
  background: #124848;
  // width: 792px;
  // height: 980px;

  padding-top: 82px;
  padding-bottom: 87px;

  padding-left: 101px;
  padding-right: 101px;

  border-radius: 20px;

  h2 {
    font-family: Georgia, serif;
    font-size: 40px;
    font-weight: 700;
    color: #d3f0c8;
    line-height: 55px;
    margin-bottom: 43px;
  }

  label {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #d3f0c8;
    line-height: 30px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
  }

  input {
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
    background: #f1ebda;
    border: none;
  }
  textarea {
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    background: #f1ebda;
    border: none;
  }
  button {
    border-radius: 40px;
    padding: 10px;
    margin-top: 35px;
    background: #d3f0c8;

    width: 221px;
    height: 65px;

    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #124848;
  }
`;

const ContactForm = () => {
  const handleSubmit = () => {};

  return (
    <StyledContactForm>
      <Container>
        <StyledInner>
          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <label>
              First Name
              <input type="text" name="firstName" id="firstName" />
            </label>
            <label>
              Second Name
              <input type="text" name="secondName" id="secondName" />
            </label>
            <label>
              Email address
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Message
              <textarea type="message" name="message" rows="4" />
            </label>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </StyledInner>
      </Container>
    </StyledContactForm>
  );
};

export default ContactForm;
