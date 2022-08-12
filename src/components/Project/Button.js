import './project.css'

const Button = ({label, link, img}) => {
    return ( 
        <div className="project-btn">
            {
            img &&
                <span className="btn-img">
                    <img className="img" src={img} alt="" srcset="" />
                </span>
            }
            <div className="label">{label}</div>
        </div>
     );
}
 
export default Button;