//import library styled-components to add styles to project
import styled from 'styled-components';
//import library react-router-dom to navigation SPA (single page aplication)
import { NavLink as Link } from 'react-router-dom';
//import library react-icons 
import {FaHamburger} from 'react-icons/fa';

export const Nav = styled.nav`
  
background: black;
  height: 40px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink= styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
    
}
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 30px;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;