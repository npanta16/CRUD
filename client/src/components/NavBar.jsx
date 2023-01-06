
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const Header = styled(AppBar)`
  background: #111111
  `
  const Tab = styled(NavLink)`
  font-size:20px;
  margin-right:20px;
  color: inherit;
  text-decoration:none;
  `
  return (
    
  <Header position="static">{/* AppBar component has default position fixed css */}
    <Toolbar>
      <Tab to='/'>Code with Narayan</Tab>
      <Tab  to ='/all'>All User</Tab>
      <Tab to='/add'>Add User</Tab>
    </Toolbar>
  </Header>
  )
}

export default NavBar;
