import { FULL_NAME } from 'constants/form.constant';
import {
  StyledForm,
  StyledFormElementContainer,
  StyledFormFieldsContainer,
  StyledInput,
} from './contactFrom.style';

const ContactForm = ({ data, errors, handleChange, onSubmit }) => {
  return (
    <StyledForm>
      <StyledFormFieldsContainer>
        <StyledFormElementContainer>
          <label for='email'>Email</label>
          <StyledInput
            name={FULL_NAME}
            value={data[FULL_NAME] || ''}
            onChange={(e) => handleChange(FULL_NAME, e.target.value)}
          />
        </StyledFormElementContainer>
      </StyledFormFieldsContainer>
    </StyledForm>
  );
};

export default ContactForm;
