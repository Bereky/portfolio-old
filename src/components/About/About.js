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
                    <p className='about-description'> 
                    I am attending Computer Science degree at Jimma University. Currently, my focus is on 
                    building and testing user interfaces. I work on responsive design, accessiblity and 
                    search engine optimization of web pages. I use React and React UI libraries on the front-end,
                    Nodejs and Express to build API's. Also, I am familiar with different databse technologies like MySQL and MongoDB.
                    My Goal is to become a Full stack Blockchain Developer. I love to hear from you if you have projects that need creativity,
                    problem solving & programming skills.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default About;