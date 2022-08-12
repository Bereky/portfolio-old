import '../../App.css';
import SocialLink from '../SocialLink/Social-links';

const Footer = () => {
    return ( 
        <footer className="footer">
            <SocialLink />
            <div className="footer-container">
                <h2 className="footer-description">©2022 Bereket Lemma </h2>
            </div>
        </footer>
     );
}
 
export default Footer;