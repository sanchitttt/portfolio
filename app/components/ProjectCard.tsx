import React from 'react'
import { ProjectCardType } from '../types'
import Image from 'next/image'
import SkillCapsule from './SkillCapsule'
import Link from 'next/link'

function ProjectCard(
    { projectName, src, githubLink, deployedLink, skillsUsed, forDesktopOnly, projectType }: ProjectCardType
) {
    return (
        <>
            {/**Mobile Card */}
            <div className='desktop:hidden mobile:flex border-t-[1px] border-b-[1px] border-[#3b3b3b] py-[30px] w-[100vw] max-w-[1570px] flex items-start justify-between'>
                <div className='flex gap-[50px] flex-col items-center w-[100%]'>
                    <Image
                        src={src}
                        width={285}
                        height={245}
                        alt={src}
                        className='max-h-[245px] rounded-[5px] scaleOnHover transition'
                    />
                    <div className='flex flex-col items-center '>
                        <div className='flex items-center gap-[10px] flex-col'>
                            <div className='text-[24px] font-bold text-white text-center' >
                                {projectName}
                            </div>
                            <span className='text-green text-[12px] font-normal'>{projectType}</span>
                        </div>
                        {skillsUsed && <div className='justify-center mt-[25px] flex flex-wrap gap-[30px] max-w-[600px] mt-[10px]'>
                            {skillsUsed.map((skill) => {
                                return <SkillCapsule
                                    key={skill}
                                    hoverEffect={false}
                                >
                                    {skill}
                                </SkillCapsule>
                            })}
                        </div>}
                    </div>
                    <div className='flex  gap-[15px] justify-between w-[80%] h-[100%]'>
                        <Link href={deployedLink}
                            target='_blank'
                        >
                            <div className='flex gap-[5px]'>
                                <i className='text-[16px] flex-wrap font-bold text-white transition hover:text-green'>Deployed Link</i>
                                <Image
                                    src='/deployed.svg'
                                    width={18}
                                    height={18}
                                    alt='Visit deployed project'
                                />
                            </div>
                        </Link>
                        <Link href={githubLink}
                            target='_blank'
                        >
                            <div className='flex gap-[5px] justify-end'>
                                <i className='text-[16px] font-bold text-white transition hover:text-green'>View Code</i>
                                <Image
                                    src='/viewCode.svg'
                                    width={18}
                                    height={18}
                                    alt='View source code'
                                />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            {/**Desktop Card */}
            <div className='desktop:flex mobile:hidden border-t-[1px] border-b-[1px] border-[#3b3b3b] py-[30px] w-[100vw] max-w-[1570px] items-start justify-between'>
                <div className='flex gap-[50px]'>
                    <Image
                        src={src}
                        width={285}
                        height={245}
                        alt={src}
                        className='max-h-[245px] min-h-[150px] rounded-[5px] scaleOnHover transition'
                    />
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-[10px]'>
                            <div className='text-[36px] font-bold text-white items-center flex gap-[7.5px]' >
                                {projectName}
                            </div>
                            <span className='text-green text-[12px] font-normal'>{projectType}</span>
                        </div>
                        {skillsUsed && <div className='flex flex-wrap gap-[30px] max-w-[600px] mt-[10px]'>
                            {skillsUsed.map((skill) => {
                                return <SkillCapsule
                                    key={skill}
                                    hoverEffect={false}
                                >
                                    {skill}
                                </SkillCapsule>
                            })}
                        </div>}
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] justify-between h-[100%] h-[100%]'>
                    <Link href={deployedLink}
                        target='_blank'
                    >
                        <div className='flex gap-[30px]'>
                            <i className='text-[30px] font-bold text-white transition hover:text-green'>Deployed Link</i>
                            <Image
                                src='/deployed.svg'
                                width={32}
                                height={32}
                                alt='Visit deployed project'
                            />
                        </div>
                    </Link>
                    <Link href={githubLink}
                        target='_blank'
                    >
                        <div className='flex gap-[30px] justify-end'>
                            <i className='text-[30px] font-bold text-white transition hover:text-green'>View Code</i>
                            <Image
                                src='/viewCode.svg'
                                width={32}
                                height={32}
                                alt='View source code'
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectCard