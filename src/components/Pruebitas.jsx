
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const LineSvg = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });


    return(
        <svg ref={ref} width="34" height="1223" viewBox="0 0 34 1223" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="10%" stopColor="#D53F8C" />
        
        </linearGradient>
      </defs>
      <motion.path
        d="M18.9996 1222.01L15.4984 0.498433"
        stroke="url(#myGradient)"
        strokeWidth="15"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: inView ? 1 : 0, pathOffset: inView ? 0 : 1 }}
        transition={{ duration: 2 }}
        
    />
    </svg>

    )
}

export default LineSvg;

/* const Pruebitas = () =>{
    return(
        <h1 style={ {width:"6vw", lineHeight:"1", color:"white", fontFamily:"SigmarOne", textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000'}}>
            
            DAMIÁN HEREDIA</h1>
    )
}

export default Pruebitas; */