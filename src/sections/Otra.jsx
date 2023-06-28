
import '../Styles/otra.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import nuevoGlichWeb from '../assets/nuevoGlichWeb.webm'
import BannerOtra from '../components/BannerOtra';
import '../Styles/bannerOtra.css'
import '../Styles/fonts.css'

const Otra = () => {
    const variantBannerOtra = {
        hidden: { y: 0, opacity: 0, scale:1 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 2.5, delay: 2.5, ease: [0.30, 0, 0.20, 1] } }
      };

    const variantCard1 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3, ease: [0.30, 0, 0.20, 1] } }
      };

      const variantCard2 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.5 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.2, ease: [0.30, 0, 0.20, 1] } }
      };
      const variantCard3 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.4, ease: [0.30, 0, 0.20, 1] } }
      };
      const variantCard4 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.6, ease: [0.30, 0, 0.20, 1] } }
      };



    return (
        
        

        <div className="otra_container">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={variantBannerOtra}>
            <BannerOtra />
            <div style={{marginTop:"20px", padding:"20px", overflow:"hidden", height:"70px", alignItems:"center", display:"flex", gap:"20px", justifyContent:"space-between", width:"", border:"1px solid #DCDCDC", backgroundColor:""}}>
            <div>
            <h2 style={{fontFamily:"resolve-sans-w05-thin-wd", paddingLeft:"40px", fontSize:"2.5rem", color:"#CDCDCD", textTransform:"uppercase"}}>Activo es estas plataformas.</h2>
            </div>
            <div style={{display:"flex", gap:"10px", paddingRight:"40px"}}> 
            <Link  to="https://www.linkedin.com/in/damian-h-a6678b224/" target="blank">
                    <svg className="svgLinkedin" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.724 0.5H59.26C61.6112 0.5 63.5 2.35528 63.5 4.61V59.378C63.5 61.64 61.6099 63.498 59.264 63.498H4.724C2.38535 63.498 0.5 61.6412 0.5 59.378V4.61C0.5 2.35378 2.38436 0.5 4.724 0.5Z" stroke="#DCDCDC"/>
                    <path className="pathSvg" d="M9.758 24.2H19.268V54.74H9.758V24.2ZM14.506 9C17.54 9 20.006 11.466 20.006 14.5C20.006 17.534 17.54 20.006 14.508 20.006C13.0485 20.0028 11.6497 19.4218 10.6175 18.39C9.58525 17.3581 9.0037 15.9595 9 14.5C9 13.7772 9.14246 13.0615 9.41924 12.3939C9.69601 11.7262 10.1017 11.1196 10.613 10.6088C11.1244 10.098 11.7314 9.69299 12.3994 9.41694C13.0674 9.1409 13.7832 8.99921 14.506 9ZM25.206 24.2H34.31V28.374H34.436C35.704 25.974 38.8 23.442 43.436 23.442C53.048 23.442 54.822 29.768 54.822 37.99V54.742H45.336V39.886C45.336 36.346 45.272 31.786 40.404 31.786C35.464 31.786 34.704 35.646 34.704 39.626V54.734H25.22V24.194L25.206 24.2Z" fill="#DCDCDC"/>
                    </svg>

                </Link>

                <Link  to="https://www.linkedin.com/in/damian-h-a6678b224/" target="blank">
                        <svg className="svgLinkedin" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.724 0.5H59.26C61.6112 0.5 63.5 2.35528 63.5 4.61V59.378C63.5 61.64 61.6099 63.498 59.264 63.498H4.724C2.38535 63.498 0.5 61.6412 0.5 59.378V4.61C0.5 2.35378 2.38436 0.5 4.724 0.5Z" stroke="#DCDCDC"/>
                        <path className="pathSvg" d="M7 47.0078V15.6459C7 15.3395 7.09062 15.187 7.30639 15.1554C7.85874 15.1237 8.71748 15.0935 9.88404 15.0935C11.0506 15.0935 12.2776 15.0619 13.6283 15.0316C14.9789 15.0014 16.2059 15 17.3423 15C20.0422 15 22.1912 15.3064 23.7864 15.8889C25.1659 16.3478 26.4259 17.1145 27.4688 18.13C28.2628 18.9283 28.854 19.9079 29.1877 20.9824C29.4696 21.8656 29.6149 22.7862 29.6178 23.7125C29.6394 24.6964 29.4739 25.676 29.1273 26.5966C28.8583 27.3575 28.4512 28.0652 27.932 28.6837C27.5623 29.1627 27.1164 29.577 26.6115 29.9107C27.3134 30.2861 27.9737 30.7378 28.5749 31.2614C29.3502 31.9461 29.976 32.7818 30.4161 33.7168C30.9699 34.9064 31.2432 36.2096 31.2144 37.5214C31.2403 39.4043 30.6606 41.244 29.5574 42.7702C28.3405 44.3755 26.6906 45.601 24.8019 46.3001C22.745 47.1272 20.2896 47.5573 17.4056 47.5573H14.1533C13.1104 47.5573 12.1596 47.5573 11.3009 47.5256C10.4421 47.494 9.67547 47.494 9.02962 47.4638C8.38664 47.4321 7.83429 47.4321 7.37255 47.4321C7.12371 47.4365 7 47.284 7 47.0078ZM13.6585 20.8947V27.7689H17.0042C17.8932 27.7689 18.7548 27.8005 19.6135 27.8307C20.2321 27.8307 20.8477 27.8926 21.4547 28.0149C21.8863 27.6409 22.2502 27.195 22.5278 26.6944C22.8227 26.0816 22.9694 25.4099 22.9579 24.7309C22.9924 23.9528 22.7651 23.1861 22.312 22.5532C21.8302 21.9663 21.1929 21.5304 20.4708 21.296C19.4683 20.9867 18.4211 20.8414 17.3725 20.8659H15.9312C15.5011 20.8659 15.1012 20.8659 14.7646 20.8975C14.4266 20.863 14.0583 20.8947 13.6585 20.8947ZM13.6585 33.5672V41.7302C14.2108 41.7619 14.7632 41.7921 15.3472 41.7921C15.9312 41.7921 16.5742 41.8237 17.3725 41.8237C18.5836 41.8482 19.7919 41.7043 20.9642 41.3936C21.8618 41.1736 22.6731 40.6946 23.2959 40.0113C23.8339 39.354 24.1158 38.5269 24.0942 37.6796C24.1129 36.8569 23.89 36.0441 23.4484 35.3479C23.0183 34.7021 22.2214 34.2116 21.0865 33.9066C20.642 33.7945 20.1904 33.7139 19.7358 33.6607C19.1331 33.5988 18.529 33.5701 17.9263 33.5701H13.6599V33.5672H13.6585Z"/>
                        <path className="pathSvg" d="M51.0672 37.0118H41.3406C41.4586 37.9411 41.7822 38.8343 42.2928 39.6211C42.8351 40.4482 43.6176 41.0912 44.5339 41.4623C45.7782 41.973 47.1173 42.2146 48.4623 42.1672C49.531 42.1672 50.5998 42.0765 51.6541 41.8895C52.6438 41.7112 53.6118 41.422 54.5382 41.0308C54.6906 40.9085 54.7841 40.9689 54.7841 41.2768V45.9703C54.7784 46.0955 54.7582 46.2192 54.7223 46.3386C54.6662 46.4234 54.5943 46.4982 54.5065 46.5543C53.4795 47.0405 52.3978 47.4016 51.283 47.6274C49.8475 47.9021 48.3875 48.0273 46.926 47.9956C44.5943 47.9956 42.6294 47.6274 41.0342 46.9226C39.534 46.2695 38.2077 45.2713 37.1677 44.0083C36.1954 42.826 35.4747 41.458 35.0489 39.9894C34.1499 36.9284 34.1931 33.6675 35.1712 30.631C35.6603 29.0948 36.4428 27.6678 37.4713 26.4279C38.4868 25.2009 39.7526 24.2084 41.1853 23.5137C42.792 22.7772 44.544 22.4104 46.3089 22.4406C47.9459 22.4018 49.5698 22.7283 51.0644 23.3928C52.3316 23.9639 53.4392 24.8399 54.2879 25.9388C55.1035 26.9875 55.7263 28.1713 56.1291 29.4371C56.5189 30.6468 56.7174 31.9097 56.7131 33.1813C56.7131 33.9178 56.6814 34.5636 56.6512 35.1448C56.621 35.7259 56.5606 36.156 56.5289 36.4336C56.5016 36.6537 56.3204 36.8205 56.0988 36.8335C55.9147 36.8335 55.5781 36.8651 55.0876 36.8953C54.4964 36.9629 53.9024 36.9931 53.3083 36.9859C52.602 36.9816 51.8656 37.0118 51.0672 37.0118ZM41.3406 32.1946H47.8164C48.6147 32.1946 49.1987 32.1946 49.567 32.1629C49.8043 32.1586 50.0402 32.1399 50.2718 32.1011V31.7947C50.2732 31.4092 50.2099 31.0251 50.0877 30.6583C49.5353 28.9336 47.9099 27.7815 46.0989 27.8347C44.3973 27.7383 42.7992 28.6517 42.0167 30.1664C41.6715 30.7993 41.4427 31.484 41.3406 32.1946Z" />
                        </svg>

                </Link>
            </div>
            </div>   
            </motion.div>
            
            

            <div className='cont_cards1'>
                <Link to="/Mas">
                < motion.div className='h_card1'
                initial="hidden"
                animate="visible"
                variants={variantCard1}
                >
                    <video className='video_card1' src={nuevoGlichWeb} loop autoPlay muted ></video>
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>SOBRE MI</h1>
                    </div>
                    
                </motion.div>
                </Link>
                
                <Link to="/NewPorf">
                <motion.div className='h_card2'
                initial="hidden"
                animate="visible"
                variants={variantCard2}
                >
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily:"ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>PORTFOLIO</h1>
                    </div>

                    <div className='containImg2'>
                    <img className='img_card2' src="https://i.ibb.co/c6jhJJv/Frame-607.png" alt="" />
                    </div>
                </motion.div>
                </Link>
            </div>

            <div className='cont_cards2'>
                <motion.div className='h_card3'
                initial="hidden"
                animate="visible"
                variants={variantCard3}
                >
                    
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>APTITUDES</h1>
                    </div>
                    <img src="https://i.ibb.co/RB7d7cp/Frame-624.png" alt="" />

                </motion.div>
                <Link to="/Contacto">
                <motion.div className='h_card4'
                initial="hidden"
                animate="visible"
                variants={variantCard4}
                >
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>CONTACTO</h1>
                    </div>
                    <div className='img_clas_card4'>
                        <img src="https://i.ibb.co/0BsMPfW/Group-5.png" alt="" />
                    </div>
                </motion.div>
                </Link>
            </div>

        </div>
        
        
    );
}

export default Otra;
