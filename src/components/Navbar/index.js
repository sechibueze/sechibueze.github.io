import NavLinkList from '../NavLinkList';
import { StyledNavbar } from './navbar.style';
import { StyledH1 } from 'assets/styles';
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
