import './project.css';
import Card from './Card';
import Banner from '../Common/Banner';

const Project = () => {
    return ( 
        <div className="project-container" >
                <div className="project-header" id='project'>
                    <Banner name="Projects"/>
            </div>
                <div className="project-cards-container"  >
                    <Card projectHeader={"Github Find"} projectDescription={"Search and display github profile"} previewSite={"https://dreamy-otter-ed3b13.netlify.app/"} sourceSite={"https://github.com/Bereky/Github-find"}/>
                    <Card projectHeader={"Express Bus"} projectDescription={"Passenger registration and ticket selling system"} previewSite={false} sourceSite={"https://github.com/Bereky/Express-bus"}/>
                    <Card projectHeader={"የአማርኛ ኪቦርድ"} projectDescription={"A browser based Amharic keyboard"} previewSite={"https://remarkable-dodol-8876e4.netlify.app/"} sourceSite={"https://github.com/Bereky/Amharic-keyboard"}/>
                    <Card projectHeader={"Forex Display"} projectDescription={"Foreign Exchange Rate display"} previewSite={"https://cute-shortbread-32a78d.netlify.app/"} sourceSite={"https://github.com/Bereky/Forex-rate"}/>
            </div>
        </div>
     );
}
 
export default Project;