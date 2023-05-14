import PropTypes from 'prop-types';
import ParaPrueba from '../components/ParaPrueba';
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/estilitos.css';
import videoEspacio from '../assets/videoEspacio.webm'


const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <svg width="34" height="81" viewBox="0 0 34 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.0173 76.5L4 41.649L29.5249 3.99983" stroke="pink" opacity="20%" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <svg width="34" height="80" viewBox="0 0 34 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 4L29.5 38L4.5 76" stroke="pink" opacity="20%" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

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
    {img:'https://i.ibb.co/Yfzw8Zm/Frame-5437773.png', width:"30vw", text: '¡Hola y bienvenidos a mi página web! 👋✨ Soy un diseñador UX/UI con tres años de experiencia en el campo del desarrollo front-end. 💻🎨 Me apasiona crear experiencias digitales únicas y atractivas, enfocadas en las necesidades y deseos de los usuarios. 🌟🔍 ¡Vamos a hacer cosas increíbles juntos! 💪🚀', element: 'h2' },
    {img:'https://i.ibb.co/DDf3Wpk/Frame-542ttt.png', width:"13vw", text: '✨ Fusiono estética y funcionalidad ⚖️ para crear experiencias excepcionales. Trabajo en diversos proyectos 📱💻, colaborando con equipos multidisciplinarios para lograr resultados sobresalientes. 💪🌟 ¡Creemos cosas increíbles juntos! 🚀', element: 'h2' },
    {img:'https://i.ibb.co/WFwq0tZ/cositos3.png', width:"30vw", text: '✨ Soy un diseñador creativo en constante exploración de nuevas tecnologías y herramientas para estar a la vanguardia del diseño y desarrollo. Me apasiona la innovación en la experiencia del usuario. 💡🌟', element: 'h2'},
    {img:'https://i.ibb.co/ng9DZQX/Linked-In-cover-13.png', width:"30vw", text: '🌐 Diseñador UX/UI con experiencia en desarrollo front-end. Interfaces intuitivas y centradas en el usuario. 💼💡 ¡Colaboremos en proyectos desafiantes! 🚀🌟', element: 'h2', loop:false },
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
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
    style={{backgroundColor:"purple"}}>
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
              text={slide.text}
              element={slide.element}
              img={slide.img}
              loop={slide.loop}
              width={slide.width}
            />
          </div>
        ))}
      </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Perfil;






