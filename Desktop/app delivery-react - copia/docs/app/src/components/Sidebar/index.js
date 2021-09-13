import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  
 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/HAMBURGUESAS'>Hamburguesas</SidebarLink>
        <SidebarLink to='/CombosHamburguesas'>Combos Hamburguesas</SidebarLink>
        <SidebarLink to='/Chorizos'>Chorizos</SidebarLink>
        <SidebarLink to='/Especiales'>Especiales</SidebarLink>
        <SidebarLink to='/Bebidas'>Bebidas</SidebarLink>
      </SidebarMenu>
      
    </SidebarContainer>
  );
};

export default Sidebar;