import './nav.css'

const NavItem = ({name, link}) => {
    return ( 
        <li className="item"><a className="item-a" href={link}>{name}</a></li>
     );
}
 
export default NavItem;