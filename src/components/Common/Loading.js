import { WindMillLoading, MeteorRainLoading} from 'react-loadingg';
import '../../app/App.css'

const Loading = () => {
    return ( 
        <div className="loading">
            <WindMillLoading color="#25E9A8"/>
            <MeteorRainLoading size="large"  color="#25E9A8"/>
        </div>
     );
}
 
export default Loading;