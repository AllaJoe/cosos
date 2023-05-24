
import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CardGrande from '../components/CardGrande';
import CardChica from '../components/CardChica';
/* import CuadradosWeb from '../assets/CuadradosWeb.webm' */
import { Link } from 'react-router-dom';
import videoEspacio from '../assets/videoEspacio.webm'





const Home = () => {
  const cardVariants = {
    hidden: { y: 150, opacity: 0, scale: 1.2 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, delay: 2.5, type: "Inertia", stiffness: 150 } }
  };
  const cardVariants2 = {
    hidden: { y: 150, opacity: 0, scale: 1.2  },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, delay: 2.6, type: "Inertia", stiffness: 200 } }
  };

  return (
    <>
    <ChakraProvider>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "black"
        }}
      >
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            /* opacity:"30%", */
            objectFit:"cover"
          }}>
        <video
        src={videoEspacio}
          autoPlay
          loop
          muted 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity:"70%",
            objectFit:"cover"
          }}
          />
        </motion.div>
  
        <motion.div
          /* initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }} */
          
          style={{
            width: '100vw',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            gap: "2vh",
            flexWrap: "wrap",
          }}
        >  
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              gap: "1vw",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Link to="/Perfil">
            <CardChica
              img="https://i.ibb.co/DDf3Wpk/Frame-542ttt.png"
              title="SOBRE MI"
              text="Conoceme, mira mi formacion y lo que tengo para dar"
              fontSize="16px"
              width="100vw"
            />
            </Link>
            <Link to="/Portfolio">
            <CardGrande
              img="https://i.ibb.co/tDws9Cs/Frame-530.png"
              title="PORTFOLIO"
              text="Mirá mis trabajos para que veas mis capacidades y experiencia"
              fontSize="16px"
            />
            </Link>
          </motion.div>
        
          <motion.div
            variants={cardVariants2}
            initial="hidden"
            animate="visible"
            style={{
              width: "100vw",
              display: "flex",
              gap: "1vw",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Link to="/Pruevis">
            <CardGrande
            img="https://i.ibb.co/pKBW866/Frame-531.png"
            title="APTITUDES"
            text="Ecá encontras mis habilidades que me califican para los diferentes trabajos"
            />
            </Link>
            <Link to="/Bio">
            <CardChica
            img="https://i.ibb.co/wMG6gZj/Frame-529.png"
            title="ESCRIBIME"
            text="Dejame un mensaje y te respondo k-po"
            fontSize="16px"
            />
            </Link>
            
</motion.div>
</motion.div>
</div>
</ChakraProvider>

</>
);
}

export default Home;