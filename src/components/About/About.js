import Banner from '../Common/Banner';
import './about.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-header-container" id='about'>
                <div className="about-banner">
                    <Banner name="About me" />
                </div>
            </div>
            <div className="about-container">
                <div className="about-description-container">
                    <h2 className="about-description-header">
                        Well versed in HTML, CSS and Javascript, 
                        I'm a Frontend developer who deeply cares about user experience. 
                        I build responsive and interactive web applications that run across 
                        different platforms. If you have projects that needs creativity and 
                        programming skills let me know.
                    </h2>
                </div>
            </div>
        </div>
     );
}

export default About;