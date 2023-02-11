import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2.85rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  outline: 0;
  border: 0;
  display: inline-block;
  margin: auto;
  border-radius: 0.5rem;
  transition: all 0.5s;
  font-family: 'font__bold';
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.light};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
  }
`;
const Button = ({ label, ...rest }) => {
  return <StyledButton {...rest}> {label} </StyledButton>;
};

export default Button;
