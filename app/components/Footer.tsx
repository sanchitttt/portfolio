import Marquee from "react-fast-marquee"
import config from "../config"

function Footer() {
    return (
        <Marquee
            autoFill
            speed={config.speed}
        >
            <div className='text-[30px] text-white mx-[60px]'>
                {"Available to "}<span><i className='text-green'>Work !</i></span>
            </div>
            <div className='absolute top-[50%] w-[1.5vw] h-[1.5vw] rounded-full bg-green'
                style={{ transform: 'translate(0%,-50%)' }}
            />
            <div className='text-[30px] text-white mx-[60px]'>
                {"Get in touch"}
            </div>
            <div className='absolute top-[50%] w-[1.5vw] h-[1.5vw] rounded-full bg-green'
                style={{ transform: 'translate(0%,-50%)' }}
            />
        </Marquee>
    )
}

export default Footer