import './nav.css'
import brand from '../../asset/brande.svg';

const NavBrand = () => {
    return ( 
        <div className="nav-brand">
            <a href="/">
                <img className="brand" src={brand} alt="Brand Img" srcset="" />
            </a>
        </div>
     );
}
 
export default NavBrand;