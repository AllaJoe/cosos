import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimPrueva = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <svg ref={ref} width="40vw" height="14" viewBox="0 0 750 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.line x1="2000" y1="7" x2="1" y2="7" stroke="white" strokeWidth="13"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: inView ? 1 : 0, pathOffset: inView ? 0 : 1, opacity: 1 }}
        transition={{ duration: 2.5, delay:2.6, ease: [0.52, 0.2, 0.32, 0.2], /* type: "tween" */}}
        exit= { {opacity:0}  }
        
        />
        </svg>


    );
}

export default AnimPrueva;
