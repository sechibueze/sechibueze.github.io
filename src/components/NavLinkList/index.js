import NavLink from '../NavLink';
import styled from 'styled-components';
import contactIcon from 'assets/images/contact__icon.svg';
const links = [
  {
    label: 'Home',
    href: '/',
    icon: '',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: contactIcon,
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
];
const StyledNavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 1.2rem 0;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;

  @media screen and (min-width: 768px) {
    position: relative;
    justify-content: flex-end;
    column-gap: 2rem;
    padding-right: 1rem;
    width: 70%;
    padding: 0;
  }
`;
const NavLinkList = () => {
  return (
    <StyledNavLinks>
      {links.map((link) => (
        <NavLink {...link} key={link.href} />
      ))}
    </StyledNavLinks>
  );
};

export default NavLinkList;
