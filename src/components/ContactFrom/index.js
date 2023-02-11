import Button from 'components/Button';
import { FULL_NAME, EMAIL, MESSAGE } from 'constants/form.constant';
import {
  StyledForm,
  StyledFormElementContainer,
  StyledFormFieldsContainer,
  StyledInput,
  StyledTextArea,
} from './contactFrom.style';

const ContactForm = ({ data, handleChange }) => {
  return (
    <StyledForm action='#' name='seComputing' method='POST' data-netlify='true'>
      {/* <input type='hidden' name='form-name' value='contact' /> */}

      <p
        style={{
          padding: '1rem',
        }}
      >
        If you are thinking of building the next big thing, feel free to send me
        a message
      </p>
      <StyledFormFieldsContainer>
        <StyledFormElementContainer>
          <label htmlFor='fullname'>Your name</label>
          <StyledInput
            name={FULL_NAME}
            value={data[FULL_NAME] || ''}
            onChange={(e) => handleChange(FULL_NAME, e.target.value)}
          />
        </StyledFormElementContainer>
        <StyledFormElementContainer>
          <label htmlFor='email'>Email</label>
          <StyledInput
            name={EMAIL}
            value={data[EMAIL] || ''}
            onChange={(e) => handleChange(EMAIL, e.target.value)}
          />
        </StyledFormElementContainer>
        <StyledFormElementContainer>
          <label htmlFor='message'>Message</label>
          <StyledTextArea
            name={MESSAGE}
            value={data[MESSAGE] || ''}
            rows={6}
            cols={10}
            onChange={(e) => handleChange(MESSAGE, e.target.value)}
          />
        </StyledFormElementContainer>
        <Button
          label={'Send'}
          type='submit'
          style={{
            marginTop: '1rem',
          }}
        />
      </StyledFormFieldsContainer>
    </StyledForm>
  );
};

export default ContactForm;
