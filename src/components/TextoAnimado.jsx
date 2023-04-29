

import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedTypingH1 = () => {
    const [text, setText] = useState('')
    const [animationComplete, setAnimationComplete] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
    if (animationComplete) {
        const intervalId = setInterval(() => {
        setText('')
        setAnimationComplete(false)
        setShowCursor(true)
        }, 2000)

        return () => clearInterval(intervalId)
    } else {
        const intervalId = setInterval(() => {
        const fullText = '😍 HOLAAA MI NOMBRE ES DAMIAN, DISEÑADOR UX/UI.'
        setText(fullText.substring(0, text.length + 1))
        setShowCursor(!showCursor)

        if (text === fullText) {
            setAnimationComplete(true)
        }
        }, 100)

        return () => clearInterval(intervalId)
    }
    }, [text, animationComplete, showCursor])

    const textProps = useSpring({
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'pink',   
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    })

    const cursorProps = useSpring({
    opacity: showCursor ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 300 },
    delay: 500,
    loop: true,
    })

    return (
    <animated.h1 style={textProps}>
        {text}
        <animated.span style={cursorProps}>|</animated.span>
    </animated.h1>
    )
}

export default AnimatedTypingH1;