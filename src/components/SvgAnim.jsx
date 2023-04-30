import { motion } from 'framer-motion';

const SvgAnim = () => {
    return(
        <svg width="500" height="449" viewBox="0 0 500 449" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M264.208 428.579C256.326 431.361 243.343 431.361 235.461 428.579C168.229 405.628 18 309.88 18 147.595C18 75.9586 75.7268 18 146.9 18C189.094 18 226.419 38.4014 249.834 69.9309C273.25 38.4014 310.807 18 352.769 18C423.942 18 481.669 75.9586 481.669 147.595C481.669 309.88 331.44 405.628 264.208 428.579Z" stroke="#E7E7E7" strokeWidth="" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}/>
        </svg>

    )
}

export default SvgAnim;