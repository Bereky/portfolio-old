import './skills.css'

const SkillName = ({skillName, skillIcon}) => {

    return ( 
            <div className="skill-icon-container">
                    {/* <div className="skillName">{skillName}</div> */}
                    <div className="skillIcon">
                        <img className="skill-icon" src={skillIcon} alt=""/* {skillIcon} */ />
                    </div>
            </div>
     );
}
 
export default SkillName;