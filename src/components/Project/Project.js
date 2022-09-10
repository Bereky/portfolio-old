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
                <Card projectHeader={"Shema Marketplace"} projectDescription={"Ecommerce application to purchase fancy clothes"} previewSite={"https://timely-lokum-191a6b.netlify.app/"} sourceSite={"https://github.com/Bereky/mern-ecommerce"}/>
                <Card projectHeader={"Github Find"} projectDescription={"Github profile search engine"} previewSite={"https://eclectic-hamster-b6841d.netlify.app"} sourceSite={"https://github.com/Bereky/Github-find"}/>
                <Card projectHeader={"Chapa Payment"} projectDescription={"Chapa payment gateway implementation with Node and Express"} previewSite={false} sourceSite={"https://github.com/Bereky/chapa-payment-express"}/>
                <Card projectHeader={"Express Bus"} projectDescription={"Passenger registration and ticket selling system"} previewSite={false} sourceSite={"https://github.com/Bereky/Express-bus"}/>
                <Card projectHeader={"የአማርኛ ኪቦርድ"} projectDescription={"A browser based Amharic keyboard"} previewSite={"https://remarkable-dodol-8876e4.netlify.app/"} sourceSite={"https://github.com/Bereky/Amharic-keyboard"}/>

            </div>
        </div>
     );
}
 
export default Project;