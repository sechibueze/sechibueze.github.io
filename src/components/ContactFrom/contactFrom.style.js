import { CARD_SHADOW } from 'constants/style.constant';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  border-radius: 1rem;
  margin: 1rem auto;
  box-shadow: ${CARD_SHADOW};
  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
export const StyledFormFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.95rem;
`;

export const StyledFormElementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  > label {
    font-size: 0.85rem;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  border: 0.5px solid blue;
  outline: 0;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'font__regular';
  border-radius: 0.25rem;
`;
export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: 0.5px solid blue;
  outline: 0;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'font__regular';
  border-radius: 0.25rem;
`;
