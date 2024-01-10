import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import './Header.css'
function Header() {
  return (
    <div> <MDBNavbar className='Navbar' light >
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='text-light'>
      <i class="fa fa-users m-2 fs-3"></i>
        EMS
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header