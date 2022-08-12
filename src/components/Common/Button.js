import '../App.css'

const Button = ({name, target}) => {
    return ( 
        <div className="btn ">
            <span className="btn-name">{name}</span>
        </div>
     );
}
 
export default Button;