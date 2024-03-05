import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const R049_ReactstrapNavbar = (props) => {
    const [mystate, setMyState] = useState({collapsed:false});
   
    const toggle = () => {
        setMyState({collapsed: !mystate.collapsed})
    };
    return (
        <div>
             <Navbar color="faded" light>
                {/* 네비게이션에서 무조건 표시되는 영역. brand부분 */}
                <NavbarBrand href="/" className='mr-auto'>Navbar</NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2"></NavbarToggler>
                <Collapse isOpen={mystate.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">react</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://example.com">200</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
         
        </div>
    );
};

export default R049_ReactstrapNavbar;