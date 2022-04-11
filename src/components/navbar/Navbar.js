import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Nav tabs className='p-1' style={{background:"teal"}}>
            <NavItem className='p-3'>
                <NavLink className='h3'>
                    <Link to="/about" style={{color:"white", textDecoration:"none"}}>
                        About
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem className='p-3'>
                <NavLink className='h3' target="_blank" href="https://github.com/" style={{color:"white"}}>
                    Github
                </NavLink>
            </NavItem>
            <NavItem className='p-3'>
                <NavLink className='h3'>
                    <Link to="/login" style={{color:"white", textDecoration:"none"}}>
                        Logout
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem className='p-3'>
                <NavLink className='h3'>
                    <Link to="/" style={{color:"white", textDecoration:"none"}}>
                        Logo goes here
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default Navbar;