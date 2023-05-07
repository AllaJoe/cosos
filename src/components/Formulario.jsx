import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { motion } from 'framer-motion'

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
        
        <motion.div style={ {display:"flex", justifyContent:"center"}}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5 }}
        
        
        >
        <form ref={form} onSubmit={sendEmail} style={ {
            width:"80vh", 
            height:"80vh", 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: "rgba(30, 30, 30, 60%)",
            border: "solid 3px #FF58F8",
            borderRadius: "10px",
            
            }}>
            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Name</label> */}
            <input style={ {width:"30vw", border:"5px black solid", padding:"5px"}} placeholder="Ingresa tu Nombre" type="text" name="user_name" required/>
            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Email</label> */}
            <input style={ {width:"30vw", border:"5px black solid", padding:"5px"}} placeholder="Ingresa tu email" type="email" name="user_email" required/>
            {/* <label style={ {color:"white", fontFamily:"IBMPlexMono-Light"}}>Message</label> */}
            <textarea style={ {width:"30vw", height:"40vh", border:"5px black solid", padding:"5px"}} placeholder="Ingresa tu mensaje" name="message"  required/>
            <input style={ {width:"30vw", marginTop:"30px", border:"5px black solid",padding:"5px", backgroundColor:"#FF58F8", fontWeight:"bold"}} type="submit" value="Send"/>
        </form>
        </motion.div>
    );
}

export default Formulario;
