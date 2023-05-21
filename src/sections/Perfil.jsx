import PropTypes from 'prop-types';
import ParaPrueba from '../components/ParaPrueba';
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/estilitos.css';
import videoEspacio from '../assets/videoEspacio.webm'
import FlechitaPrev from '../components/FlechitaPrev';
import FlechitaNext from '../components/FlechitaNext';
/* import Regresar from '../components/Regresar'; */
/* import TextoDeColor from '../components/TextoDeColor'; */
/* import { Link } from 'react-router-dom'; */




const CustomPrevArrow = (props) => (        //FLECHA PREV
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FlechitaPrev      //flecha 1
      duration="0.5"
    />
    <FlechitaPrev      //flecha 2
      duration="0.6"
    />
    <FlechitaPrev      //flecha 3
      duration="0.7"
    />
  </div>
);

const CustomNextArrow = (props) => (       //FLECHA NEXT
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FlechitaNext   //flecha 1
    duration="0.5"
    />
    <FlechitaNext  //flecha 2
    duration="0.6"
    />
    <FlechitaNext  //flecha 3
    duration="0.7"
    />
  </div>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func
};

const Perfil = () => {

  const carouselVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: "Inertia", stiffness: 250 } }
  };

  const slides = [
    {img:'https://i.ibb.co/vxKP113/nuevo-logo.png', size:"1.5rem",
    color1:"white",
    textShadow:"0 0 8px #E85390",
    color2:"#83FFE9",
    textShadow2:"0 0 8px #83FFE9",
    color3:"white",
    textShadow3:"0 0 8px #E85390", text1:"HOLALALA", width:"30vw", text: '¡Hola y bienvenidos a mi página web! 👋✨ Soy un diseñador UX/UI con tres años de experiencia en el campo del desarrollo front-end. 💻🎨 Me apasiona crear experiencias digitales únicas y atractivas, enfocadas en las necesidades y deseos de los usuarios. 🌟🔍 ¡Vamos a hacer cosas increíbles juntos! 💪🚀', element: 'h2' },
    {img:'https://i.ibb.co/DDf3Wpk/Frame-542ttt.png', size:"1.5rem",
    color1:"white",
    textShadow:"0 0 8px #E85390",
    color2:"#83FFE9",
    textShadow2:"0 0 8px #59B0C6",
    color3:"white",
    textShadow3:"0 0 8px #E85390", text1:"ESTA ES LA CARD 2", width:"13vw", text: '✨ Fusiono estética y funcionalidad ⚖️ para crear experiencias excepcionales. Trabajo en diversos proyectos 📱💻, colaborando con equipos multidisciplinarios para lograr resultados sobresalientes. 💪🌟 ¡Creemos cosas increíbles juntos! 🚀', element: 'h2' },
    {img:'https://i.ibb.co/WFwq0tZ/cositos3.png', size:"1.5rem",
    color1:"white",
    textShadow:"0 0 8px #E85390",
    color2:"#83FFE9",
    textShadow2:"0 0 8px #59B0C6",
    color3:"white",
    textShadow3:"0 0 8px #E85390", text1:"ESTA ES LA CARD 3", width:"30vw", text: '✨ Soy un diseñador creativo en constante exploración de nuevas tecnologías y herramientas para estar a la vanguardia del diseño y desarrollo. Me apasiona la innovación en la experiencia del usuario. 💡🌟', element: 'h2'},
    {img:'https://i.ibb.co/ng9DZQX/Linked-In-cover-13.png', size:"1.5rem",
    color1:"white",
    textShadow:"0 0 8px #E85390",
    color2:"#83FFE9",
    textShadow2:"0 0 8px #59B0C6",
    color3:"white",
    textShadow3:"0 0 8px #E85390", text1:"ESTA ES LA CARD 4", width:"30vw", text:'🌐 Diseñador UX/UI con experiencia en desarrollo front-end. Interfaces intuitivas y centradas en el usuario. 💼💡 ¡Colaboremos en proyectos desafiantes! 🚀🌟', element: 'h2', loop:false },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{backgroundColor:"purple"}}>
      {/* <div>  
      <Link to="/Home">
      <Regresar />
      </Link>  
    </div> */}
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
            objectFit:"cover",
            /* zIndex: 1 */
          }}/>
      
      <motion.div
      variants={carouselVariants}
      initial="hidden"
      animate="visible"
      >
      <Slider {...carouselSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <ParaPrueba
              text1= {slide.text1}
              text={slide.text}
              element={slide.element}
              img={slide.img}
              loop={slide.loop}
              width={slide.width}

              size={slide.size}
              color1={slide.color1}
              textShadow={slide.textShadow}
              color2={slide.color2}
              textShadow2={slide.textShadow2}
              color3={slide.color3}
              textShadow3={slide.textShadow3}
              fontFamily="IBMPlexMono-Light"
            />
          </div>
        ))}
      </Slider>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Perfil;






