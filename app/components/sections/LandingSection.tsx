import React from 'react';
import { ChevronTopRight, DownArrow, GithubIcon, LinkedinIcon } from '../icons';
import { motion } from 'framer-motion';

function LandingSection() {
    return (
        <div className='w-[100vw] flex items-center justify-center mb-[100px] mt-[100px]'>
            <div className='w-[100%] max-w-[1570px] flex items-center justify-between h-[600px] px-[50px]'>
                <div className='flex flex-col'>
                    <div className='uppercase text-white mainText font-bold'>
                        <span className='text-green'>Full <br />stack</span><br /> developer
                    </div>
                    <div className='flex gap-[30px] items-center mt-[30px]'>
                        <button className='text-white border-[1px] uppercase rounded-full w-[325px] h-[100px] flex items-center justify-center text-[36px] font-bold hover:border-green hover'>
                            Contact us
                        </button>
                        <div className='flex items-center gap-[20px]'>
                            <i className='leftHover text-white font-bold uppercase text-[36px]'
                            >
                                Download CV
                            </i>
                            <div className='w-[30px] h-[30px] flex items-center justify-center bg-green rounded-full'>
                                <ChevronTopRight />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-[40px] items-center'>
                    <LinkedinIcon />
                    <GithubIcon />
                    <div className='mt-[30px]  rounded-full w-[45px] h-[70px] border-[1px] flex items-center justify-center'>
                        <div className='upDown'>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection