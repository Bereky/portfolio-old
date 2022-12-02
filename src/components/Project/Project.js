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
                stackIcon: "https://tw-strapi.s3.amazonaws.com/expressjs_ar21_b4dd392c7c.svg"
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
        dashDonation: [
            {
                stackAlt: "React",
                stackIcon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            },
            
            {
                stackAlt: "Tailwind",
                stackIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
            },
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
                stackIcon: "https://tw-strapi.s3.amazonaws.com/expressjs_ar21_b4dd392c7c.svg"
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
                stackIcon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
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
                <Card projectHeader={"Dash Donation"} projectDescription={"Public donation for a charity organization"} projectStack={projectStackIcons.dashDonation} previewSite={"https://dash-donation.vercel.app/"} sourceSite={"https://github.com/Bereky/dash_donation"}/>
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