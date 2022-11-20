import NavLinkList from '../NavLinkList';
import { StyledNavbar } from './navbar.style';
const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <h1>@computingCEO</h1>
      </div>
      <NavLinkList />
    </StyledNavbar>
  );
};

export default Navbar;
