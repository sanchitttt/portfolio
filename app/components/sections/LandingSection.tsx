import React from 'react';
import { ChevronTopRight, DownArrow, GithubIcon, LinkedinIcon } from '../icons';
import { motion } from 'framer-motion';

function LandingSection() {
    return (
        <section className='w-[100vw] flex  justify-center mb-[100px] mt-[100px]'>
            <div className='w-[100vw] max-w-[1570px] flex items-center justify-between  mobile:px-[10px]  desktop:px-[50px]'>
                <div className='flex flex-col mobile:items-center tablet:items-start w-[100%] max-w-[100vw]'>
                    <div className='uppercase text-white mobile:text-[40px] mobile:leading-[4rem] tablet:text-[10vw] tablet:leading-[8.5vw] font-bold mobile:text-center tablet:text-left'>
                        <span className='text-green'>Full <br />stack</span><br /> developer
                    </div>
                    <div className='flex gap-[30px] items-center mt-[30px]'>
                        <button className='text-white border-[1px] uppercase rounded-full  flex items-center justify-center mainButtonText py-[10px] px-[20px] font-bold hover:border-green hover'>
                            Contact us
                        </button>
                        <div className='flex items-center gap-[20px]'>
                            <i className='leftHover text-white font-bold uppercase  mainButtonText'
                            >
                                Download CV
                            </i>
                            <div className='w-[30px] h-[30px] flex items-center justify-center bg-green rounded-full'>
                                <ChevronTopRight />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-[40px] items-center mobile:hidden tablet:flex'>
                    <LinkedinIcon />
                    <GithubIcon />
                    <div className='mt-[30px]  rounded-full w-[45px] h-[70px] border-[1px] flex items-center justify-center'>
                        <div className='upDown'>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection