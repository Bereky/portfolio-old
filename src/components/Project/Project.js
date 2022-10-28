import Card from './Card';
import Banner from '../Common/Banner';
import './project.css';

const Project = () => {
    const projectStackIcons = {
        shema: [
            {
                stackAlt: "React",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            },
            
            {
                stackAlt: "Express",
                stackIcon: "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png"
            },
            {
                stackAlt: "NodeJS",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
            },
            {
                stackAlt: "MongoDB",
                stackIcon: "https://www.svgrepo.com/show/331488/mongodb.svg"
            }
        ],
        decentral: [
            {
                stackAlt: "React",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            },
            
            {
                stackAlt: "Tailwind",
                stackIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
            },
        ],
        githubFind: [
            {
                stackAlt: "React",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            },
            {
                stackAlt: "CSS",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
                stackAlt: "Material UI",
                stackIcon: "https://v4.mui.com/static/logo.png"
            },
        ],
        chapa: [
            {
                stackAlt: "NodeJS",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
            },
            {
                stackAlt: "Express",
                stackIcon: "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png"
            }

            
        ],
        express: [
            {
                stackAlt: "HTML",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/174/174854.png"
            },
            {
                stackAlt: "CSS",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
                stackAlt: "PHP",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
            },
            {
                stackAlt: "MySQL",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
            }
        ],
        keyboard: [
            {
                stackAlt: "HTML",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/174/174854.png"
            },
            {
                stackAlt: "CSS",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
                stackAlt: "Bootstrap",
                stackIcon: "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png"
            }
        ],
    }
    return ( 
        <div className="project-container" >
            <div className="project-header" id='project'>
                <Banner name="Projects"/>
            </div>
            <div className="project-cards-container">
                <Card projectHeader={"Shema"} projectDescription={"Full-stack Ecommerce application"} projectStack={projectStackIcons.shema} previewSite={"https://timely-lokum-191a6b.netlify.app/"} sourceSite={"https://github.com/Bereky/mern-ecommerce"}/>
                <Card projectHeader={"Decentral"} projectDescription={"Blockchain education archive"} projectStack={projectStackIcons.decentral} previewSite={"https://decentral-gray.vercel.app/"} sourceSite={"https://github.com/Bereky/easy_UIs"}/>
                <Card projectHeader={"Github Find"} projectDescription={"Github profile search engine"} projectStack={projectStackIcons.githubFind} previewSite={"https://eclectic-hamster-b6841d.netlify.app"} sourceSite={"https://github.com/Bereky/Github-find"}/>
                <Card projectHeader={"Chapa Node"} projectDescription={"Payment gateway implementation boilerplate"} projectStack={projectStackIcons.chapa} previewSite={false} sourceSite={"https://github.com/Bereky/chapa-payment-express"}/>
                <Card projectHeader={"Express Bus"} projectDescription={"Passenger registration system"} projectStack={projectStackIcons.express} previewSite={false} sourceSite={"https://github.com/Bereky/Express-bus"}/>
                <Card projectHeader={"Amharic keyboard"} projectDescription={"Web based keyboard to type in Amharic language"} projectStack={projectStackIcons.keyboard} previewSite={"https://remarkable-dodol-8876e4.netlify.app/"} sourceSite={"https://github.com/Bereky/Amharic-keyboard"}/>
            </div>
        </div>
     );
}
 
export default Project;