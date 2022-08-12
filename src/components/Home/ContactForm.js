import './contact.css'

const ContactForm = (props) => {
    
    const formSubmitted = (e) => {
        e.preventDefault()
        props.isSubmitted(true)
    }
    return ( 
        <div className="form-section">
            <div className="form-container">
                <form className="contact-form" onSubmit={formSubmitted}>
                    <input className='form-input name-input' type="text" placeholder='Your name' required/>
                    <input className='form-input email-input' type="email" placeholder='Your email' required/>
                    <input className='form-input message-input' type="text" placeholder='Leave a message'/>
                    <button className='send-btn'>Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;