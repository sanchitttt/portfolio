import React from 'react'
import { ProjectCardType } from '../types'
import Image from 'next/image'
import SkillCapsule from './SkillCapsule'
import Link from 'next/link'

function ProjectCard(
    { projectName, src, githubLink, deployedLink, skillsUsed }: ProjectCardType
) {
    return (
        <div className='border-t-[1px] border-b-[1px] border-[#3b3b3b] py-[30px] w-[100vw] max-w-[1570px] flex items-start justify-between'>
            <div className='flex gap-[50px]'>
                <Image
                    src={src}
                    width={285}
                    height={245}
                    alt={src}
                    className='max-h-[245px] rounded-[5px] scaleOnHover transition'
                />
                <div className='flex flex-col'>
                    <div className='text-[36px] font-bold text-white' >
                        {projectName}
                    </div>
                    <div className='flex flex-wrap gap-[30px] max-w-[600px] mt-[10px]'>
                        {skillsUsed.map((skill) => {
                            return <SkillCapsule
                                key={skill}
                                hoverEffect={false}
                            >
                                {skill}
                            </SkillCapsule>
                        })}
                    </div>
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
    )
}

export default ProjectCard