import React from 'react';
import { Nav, NavIcon, Bars} from './NavbarElements';



//show sidebar
const Navbar= ({toggle}) => {
    return (
        <>
         <Nav>
      
       <NavIcon onClick={toggle}>
        <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;