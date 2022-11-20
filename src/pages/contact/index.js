import ContactForm from 'components/ContactFrom';
import { EMAIL, FULL_NAME, MESSAGE } from 'constants/form.constant';
import { useState } from 'react';

const formValues = {
  [EMAIL]: '',
  [FULL_NAME]: '',
  [MESSAGE]: '',
};
const initFormErrors = {
  [EMAIL]: '',
  [FULL_NAME]: '',
  [MESSAGE]: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(formValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const handleChange = (name, value) => {
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'>
      <ContactForm
        handleChange={handleChange}
        onSubmit={handleSubmit}
        data={formData}
        errors={formErrors}
      />
    </div>
  );
};

export default Contact;
