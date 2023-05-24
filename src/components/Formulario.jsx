import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { motion } from 'framer-motion';
import '../Styles/formulario.css';


const Formulario = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lpi7im3', 'template_z95scgf', form.current, 'gTXU718W0jx33RtyD')
      .then((result) => {
          console.log(result.text);
          swal ({
            title: "Mensaje enviado",
            text: "Tu mensaje ha sido enviado",
            icon: "success",
          })
          
          
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        
        <motion.div style={ {display:"flex", justifyContent:"center", backgroundColor:"", alignContent:"center"}}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5 }}
        
        
        >
        <form className='form_cont' ref={form} onSubmit={sendEmail} >


            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Name</label> */}
            <input className='nombre' placeholder="TU NOMBRE" type="text" name="user_name" required/>
            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Email</label> */}
            <input className='nombre' placeholder="TU EMAIL" type="email" name="user_email" required/>
            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Message</label> */}
            <textarea className='texttext' placeholder="ESCRIBIME" name="message"  required/>
            <input className='input_submit' type="submit" value="Send"/>
        </form>
        </motion.div>
    );
}

export default Formulario;
