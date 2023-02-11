import styled from 'styled-components';
import NavLinkList from '../NavLinkList';
import { StyledNavbar } from './navbar.style';
const StyledH1 = styled.h1`
  font-family: 'font__bold';
  font-weight: bolder;
  font-size: 1.75rem;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <a
          href='/'
          style={{
            textDecoration: 'none',
          }}
        >
          <StyledH1>@computingCEO</StyledH1>
        </a>
      </div>
      <NavLinkList />
    </StyledNavbar>
  );
};

export default Navbar;
