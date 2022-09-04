import '../../app/App.css'
import banner from "../../asset/banner.svg"

const Banner = ({name}) => {
    return ( 
        <div className="banner">
            <img className="banner-img" src={banner} alt="img" />
            <div className="banner-head">
                <h1 className="banner-header">{name}</h1>
            </div>
        </div>
     );
}
 
export default Banner;