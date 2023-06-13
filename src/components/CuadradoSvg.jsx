import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CuadradoSvg = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });


    return (
        <div style={{position:"absolute"}}>
        <svg 
             ref={ref}
             width="100%"
             height="auto"
             viewBox="0 0 530 274"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             style={{ /* width: "100%",  */width: "1450px" }}>
        <motion.path d=" M515 15V259H15L15 15.0123L516 15.0123" stroke="#D9D9D9" strokeWidth="3"
        initial={{ pathLength: 0, pathOffset: 1, opacity:3, scale:1.2 }}
        animate={{ pathLength: inView ? 1 : 0, pathOffset: inView ? 0 : 1, opacity: 1, scale:0.3 }}
        transition={{ duration: 1.2 , delay:0.4, ease: [0.10, 0.30, 0.12, 0.2], /* type: "tween" */}}
        exit= { {opacity:0}  }
        />
        </svg>

        </div>




    );
}

export default CuadradoSvg;
