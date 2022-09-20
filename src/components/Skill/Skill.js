import SkillCard from "./SkillCard";
import './skills.css'
import Banner from '../Common/Banner';

const Skill = () => {

        const backEndSkills =[
            {name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png"},
            {name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png"},
            {name: "NodeJs", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"},
            {name: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg"},
        ];

        const frontEndSkills = [
            {name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png"},
            {name: "SASS", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png"},
            {name: "JavaScipt", icon: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png"},
            {name: "Material UI", icon: "https://v4.mui.com/static/logo.png"},
            {name: "jQuery", icon: "https://icon-library.com/images/jquery-icon/jquery-icon-21.jpg"},
            {name: "React", icon: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"}
        ];

        const toolSkills = [
            {name: "C++", icon:"https://cdn-icons-png.flaticon.com/512/6132/6132222.png"},
            {name: "Python", icon:"https://cdn-icons-png.flaticon.com/512/1387/1387537.png"},
            {name: "Adobe XD", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968559.png"},
            {name: "Vs Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1280px-Visual_Studio_Code_1.35_icon.svg.png"},
            {name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png"}
        ];

    return ( 
        <div className="skill-section-container">
            <div className="skill-section-header" id='skills'>
                <Banner name="Skills"/>
            </div>
            <div className="skill-section-container">
                <div className="skill-section">
                    <SkillCard skillHeader="Front End" skillType="frontend" skills={frontEndSkills}/>
                    <SkillCard skillHeader="Back End" skillType="backend" skills={backEndSkills}/>
                    <SkillCard skillHeader="Others" skillType="tools" skills={toolSkills}/>
                </div> 
            </div>
        </div>
     );
}
 
export default Skill;