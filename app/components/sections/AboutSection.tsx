import Image from 'next/image'
import React from 'react'
import { GithubIcon, LinkedinIcon } from '../icons'

function AboutSection() {
    return (
        <section className='w-[100vw] mb-[100px] flex  justify-center mt-[100px]'>
            <div className='max-w-[1570px] tablet:w-[95%] mobile:w-[90%]'>
                <div className='text-[72px] text-white font-bold '><span className='text-green'>.</span>about</div>
                <div className='flex gap-[30px] items-center'>
                    <div>
                        <Image
                            src='/img.jpg'
                            width={122}
                            height={122}
                            alt='my picture'
                            className='grayscale hover:grayscale-0 transition rounded-full mr-[30px] mt-[30px]'
                        />
                    </div>
                    <GithubIcon size={36} />
                    <LinkedinIcon size={36} />
                </div>
                <div className='max-w-[1570px] w-[100%] flex items-center justify-between mobile:flex-col tablet:flex-row mobile:gap-[30px] tablet:gap-[10px]'>
                    <div className='text-white max-w-[740px] mt-[60px] mobile:text-[16px] tablet:text-[30px] mobile:text-center tablet:text-left'>
                        Hey<span><i>! </i></span> {"i'm"}<em> Sanchit</em>, 22 year old from <i>India</i>. Crio Graduate and Full Stack Developer specializing in the MERN stack. Passionate about creating robust and scalable web applications.
                    </div>
                    <div className='text-white max-w-[740px] mobile:text-[16px] tablet:text-[30px]  mobile:text-center tablet:text-left'>
                        Open to new opportunities to contribute technical expertise and deliver exceptional user experiences.
                    </div>
                </div>
                <div className='tablet:text-[34px] mobile:text-[16px] mobile:text-center tablet:text-left font-bold text-white mt-[50px]  w-[100%]'>
                    <i>Degree: <u className='ml-[10px]'>{"Bachelor's degree in CS"}</u></i>
                </div>
            </div>


        </section >
    )
}

export default AboutSection