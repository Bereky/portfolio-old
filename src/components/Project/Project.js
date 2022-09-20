import Card from './Card';
import Banner from '../Common/Banner';
import './project.css';

const Project = () => {
    return ( 
        <div className="project-container" >
            <div className="project-header" id='project'>
                <Banner name="Projects"/>
            </div>
            <div className="project-cards-container">
                <Card projectHeader={"Shema Marketplace"} projectDescription={"Full-stack Ecommerce application"} previewSite={"https://timely-lokum-191a6b.netlify.app/"} sourceSite={"https://github.com/Bereky/mern-ecommerce"}/>
                <Card projectHeader={"Github Find"} projectDescription={"Github profile search engine"} previewSite={"https://eclectic-hamster-b6841d.netlify.app"} sourceSite={"https://github.com/Bereky/Github-find"}/>
                <Card projectHeader={"Chapa Payment"} projectDescription={"Payment gateway implementation boilerplate"} previewSite={false} sourceSite={"https://github.com/Bereky/chapa-payment-express"}/>
                <Card projectHeader={"Express Bus"} projectDescription={"Passenger registration system"} previewSite={false} sourceSite={"https://github.com/Bereky/Express-bus"}/>
            </div>
        </div>
     );
}
 
export default Project;