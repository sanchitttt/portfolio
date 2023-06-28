import React from 'react'
import { EmailIcon, PhoneIcon } from './icons'

function Navbar() {
    return  (
        <div className='w-[100vw] h-[70px] flex items-center justify-center'>
            <div className='w-[100%] flex justify-between items-center tablet:px-[10vw] mobile:px-[5vw] desktop:px-[2vw] h-[70px] border-b-[1px] border-[#5f5f5fb9] max-w-[1570px]'>
                <div className='text-main font-bold mobile:text-[7.5vw] tablet:text-[5vw] desktop:text-[2vw] text-white '>
                    <span className='text-green'>.</span> sanchit
                </div>

                <div className='flex gap-[5vw]'>
                    <EmailIcon />
                    <PhoneIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar