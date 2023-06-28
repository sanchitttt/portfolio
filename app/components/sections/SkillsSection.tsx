import React from 'react'
import config from '../../config'
import SkillCapsule from '../SkillCapsule'
import Marquee from "react-fast-marquee"
import { GenericSkillIcon } from '../icons'

function SkillsSection() {
    return (
        <section className='w-[100vw] flex  justify-center mt-[100px]'>
            <div className='max-w-[1570px] tablet:w-[95%] mobile:w-[90%]'>
                <div className='text-[72px] text-white font-bold'><span className='text-green'>.</span>skills</div>
                <div className='mt-[30px] flex flex-wrap mobile:gap-[15px] tablet:gap-[30px] max-w-[900px]'>
                    {config.skills.map((skill) => {
                        return <SkillCapsule key={skill}>{skill}</SkillCapsule>
                    })}
                </div>
                <Marquee className='mt-[100px]'
                    // pauseOnHover
                    speed={config.skillNamesSpeed}
                >
                    {config.skillsNames.map((skillPath) => {
                        return <GenericSkillIcon
                            key={skillPath}
                            src={skillPath} />
                    })}
                </Marquee>
            </div>
        </section>
    )
}

export default SkillsSection