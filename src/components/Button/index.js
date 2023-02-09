import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2.85rem;
  background: blueviolet;
  color: aliceblue;
  outline: 0;
  border: 0;
  display: inline-block;
  margin: auto;
  border-radius: 0.5rem;
`;
const Button = ({ label, ...rest }) => {
  return <StyledButton {...rest}> {label} </StyledButton>;
};

export default Button;
