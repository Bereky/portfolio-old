import NavBrand from './NavBrand';
import NavItem from './NavItem';
import './nav.css'

const Nav = () => {
    return ( 
        <nav className="navbar">
            <div className="nav-transparent"></div>
            <div className="nav">
                <NavBrand />
                <div className="nav-items-container">
                    <div className="nav-items-list">
                        <ul className="nav-items">
                            <NavItem name="Home" link="#home"/>
                            <NavItem name="About" link="#about"/>
                            <NavItem name="Projects" link="#project"/>
                            <NavItem name="Skills" link="#skills"/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;