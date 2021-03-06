import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

import Login from '../Login/login'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">
            <span class="text-light">Acceuil</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span class="text-light">Tutoriel</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/tutoriel/Tuto1">
                    Tuto 1 :
                  </DropdownItem>
                  <DropdownItem href="/tutoriel/Tuto2">
                    Tuto 2 : 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/tutoriel/Tuto3">
                    Tuto 3 :
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/qcouroneau/frontTutoJEE">
                <span class="text-light">GitHub</span>
              </NavLink>
              </NavItem>
            </Nav>
            <Login />
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default NavBar;