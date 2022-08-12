import { useState } from 'react';
import './home.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ContactForm from './ContactForm';
import Thank from './Thank';

const Home = () => {
    const [modalState, setModalState] = useState(false)
    const [formSubmit, setFormSubmit] = useState(false)

    const openModal = ()=> setModalState(true)
    const closeModal = ()=> setModalState(false)

    const formIsSubmitted = (e) => {
      setFormSubmit(true);
      setTimeout(endForm, 2000)
    }

    const endForm = () => {
      closeModal()
      setFormSubmit(false);
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 350,
        color: '#25E9A8',
        bgcolor: '#0F154B',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return ( 
        <div className="home-container" id="home">
            <div className="main-section">
                <div className="content">
                    <div className="content-header">
                        <p className="mini-header">Hey, my name is</p>
                        <h1 className="content-main-header">Bereket Lemma</h1>
                        <h2 className="content-child-header">I am a Software Developer</h2>
                         <h3 className="content-description">I develop web applications for small to mid-size businesses</h3>
                        <button className="btn" name="Hire Me" onClick={openModal}> <span className="btn-name">Hire Me</span></button>
                    </div>
                </div>
            </div>
            <Modal
            open={modalState}
            onClose={closeModal}
            >
              <Box sx={modalStyle}>
                {formSubmit? <Thank /> : <ContactForm isSubmitted={formIsSubmitted}/> }
              </Box>
              </Modal>
        </div>
     );
}
 
export default Home;