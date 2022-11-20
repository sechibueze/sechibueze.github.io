import styled from 'styled-components';

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  > img {
    width: 1rem;
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