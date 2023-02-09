import NavLinkList from '../NavLinkList';
import { StyledNavbar } from './navbar.style';
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
          <h1>@computingCEO</h1>
        </a>
      </div>
      <NavLinkList />
    </StyledNavbar>
  );
};

export default Navbar;
