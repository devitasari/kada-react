import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/about" className='nav-link'>About</NavLink>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        </nav>
    )
}

export default Nav