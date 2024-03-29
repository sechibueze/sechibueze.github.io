import NavLink from '../NavLink';
import styled from 'styled-components';
import contactIcon from 'assets/images/contact__icon.svg';
import aboutIcon from 'assets/images/about__icon.svg';
import projectIcon from 'assets/images/project__icon.png';
const links = [
  {
    label: 'About',
    href: '/about',
    icon: aboutIcon,
  },
  {
    label: 'Works',
    href: '/portfolio',
    icon: projectIcon,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: contactIcon,
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
  background: ${({ theme }) => theme.colors.light};

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
