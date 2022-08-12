import './socialLink.css'

const Link = ({name, id, icon}) => {
    return ( 
        <div className="link-container">
            <div className="social-link" id={id}>
                <span className="icon">
                    <img className="link-icon" src={icon} alt="" />
                </span>
               {/*  <span className="link-name">{name}</span> */}
            </div>
        </div>
        
     );
}
 
export default Link;