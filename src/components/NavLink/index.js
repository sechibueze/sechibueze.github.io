import styled from 'styled-components';

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: 'font__medium';
  font-weight: bolder;
  text-decoration: none;

  > img {
    width: 1rem;
    filter: ${({ theme }) => theme.filters.primary};
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const NavLink = ({ href, label, icon }) => {
  return (
    <StyledLink href={href}>
      {icon && <img src={icon} alt={label} />}
      {label && <p>{label}</p>}
    </StyledLink>
  );
};

export default NavLink;
