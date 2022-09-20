import './project.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code'; ;

const Card = ({previewSite, projectHeader, projectDescription, projectPreview, sourceSite}) => {
    return ( 
        <div className="project-card">
            <div className="card">
            <div className="top-line"></div>
                <div className="card-description-container">
                    <did className="project-name-container">
                        <h2 className='project-name-header'>{projectHeader}</h2>
                    </did>
                    <div className="project-stack">
                        <div className="project-stack-item">
                            <img className="stack-icon" src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png' alt=""/* {skillIcon} */ />
                        </div>
                        <div className="project-stack-item">
                            <img className="stack-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' alt=""/* {skillIcon} */ />
                        </div>
                        <div className="project-stack-item">
                            <img className="stack-icon" src='https://v4.mui.com/static/logo.png' alt=""/* {skillIcon} */ />
                        </div>
                    </div>
                    <div className="project-description-container">
                        <p className='project-description'>{projectDescription}</p>
                    </div>
                </div>
                <div className="card-options">
                    <IconButton >
                        {previewSite? <a href={previewSite} target="_blank"  rel='external' className='sourceCode projectLink'> <VisibilityIcon fontSize="medium"/> </a> : <VisibilityOffIcon fontSize="medium"/>}
                        
                    </IconButton>
                    <IconButton >
                        <a href={sourceSite} target="_blank" rel='external' className='sourceCode projectLink'>
                            <CodeIcon fontSize="medium"/>
                        </a>
                    </IconButton>
                </div>

            </div>
        </div>
     );
}
 
export default Card;