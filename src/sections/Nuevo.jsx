import PropTypes from 'prop-types';
import ParaPrueba from '../components/ParaPrueba';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/estilitos.css';

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
  const slides = [
    { titleColor: 'green', textColor: 'white' },
    { titleColor: 'red', textColor: 'blue' },
    { titleColor: 'purple', textColor: 'yellow' },
    { titleColor: 'orange', textColor: 'black' },
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
    <div>
      <Slider {...carouselSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <ParaPrueba
              img="https://i.ibb.co/tDws9Cs/Frame-530.png"
              titleColor={slide.titleColor}
              textColor={slide.textColor}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Perfil;






