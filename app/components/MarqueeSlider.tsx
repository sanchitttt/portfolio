import Marquee from "react-fast-marquee"
import config from "../config"

function MarqueeSlider() {
    return (
        <div className='border-t-[1px] border-b-[1px] py-[15px] border-[#4e4e4e]'>
            <Marquee
                autoFill
                speed={config.speed}
            >
                <div className='text-[30px] text-white mx-[60px]'>
                    {"Let's create something "}<span><i className='text-green'>Amazing</i></span>
                </div>
                <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-green' />
                <div className='text-[30px] text-white mx-[60px]'>
                    {"Get in touch"}
                </div>
                <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-green' />
            </Marquee>
        </div>
    )
}

export default MarqueeSlider