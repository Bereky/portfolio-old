
import SkillName from './SkillName';

const SkillCard = ({skillHeader, skillType, skills}) => {
   
    return ( 
        <div className="skill-card-container" id={skillType}>
            <div className="skill-card" >
                <div className="skill-card-header">
                    <div className="line"></div>
                    <h1 className="skill-card-header-name">{skillHeader}</h1>
                </div>
                <div className="skill-list-section">
                    <div className="skill-list">
                        {skills.map((item) => <SkillName skillIcon= {item.icon} />)}
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default SkillCard;


