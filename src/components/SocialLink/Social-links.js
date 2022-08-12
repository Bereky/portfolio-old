import './socialLink.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social_link = () => {
    return ( 
        <div className="social-link-container">
            <div className="social-links">
                <a href="https://www.t.me/berek_et" target="blank" className="social-link link-icon"><TelegramIcon /></a>
                <a href="https://www.twitter.com/berek_et" target="blank" className="social-link link-icon"><TwitterIcon /></a>
                <a href="https://github.com/Bereky" target="blank" className="social-link link-icon"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/bereket-lemma-49868a152/" target="blank" className="social-link link-icon"><LinkedInIcon /></a>

            </div>
        </div>
     );
}

export default Social_link;