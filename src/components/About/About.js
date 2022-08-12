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
                    <h2 className="about-description-header">Software developer, writer and UI/UX designer </h2>
                    <h2 className='about-description'> 
                    I am a BSc student in Computer Science at Jimma University. Currently my focus is on 
                    building and testing user interfaces. I work on responsive design, accessiblity and 
                    search engine optimization of web pages. I mostly use React.js and MaterialUI to build 
                    websites but i also use PHP. I love to hear from you if you have projects that need creativity,
                    problem solving & programming skills.
                    </h2>
                </div>
            </div>
        </div>
     );
}

export default About;