import React from 'react'
import ProjectCard from '../ProjectCard'
import config from '@/app/config'

function MiniProjects() {
    return (
        <section className='w-[100vw]  flex  justify-center mt-[200px]'>
            <div className='max-w-[1570px] w-[100%]'>
                <div className='mb-[60px] text-[72px] text-white font-bold'><span className='text-green'>.</span>assignments</div>
                {config.miniProjects.map((project) => {
                    return <ProjectCard
                        key={project.projectName}
                        projectName={project.projectName}
                        src={project.src}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                        skillsUsed={project.skillsUsed}
                        forDesktopOnly={project.forDesktopOnly}
                        projectType={project.projectType}
                    />
                })}
            </div>
        </section>
    )
}

export default MiniProjects