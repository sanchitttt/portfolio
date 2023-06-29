import config from "@/app/config"
import ProjectCard from "../ProjectCard"

function ProjectsSection() {
    return (
        <section className='w-[100vw] flex  justify-center mt-[200px] mb-[100px]'>
            <div className='max-w-[1570px] tablet:w-[95%] mobile:w-[90%]'>
                <div className='mb-[60px] text-[58px] text-white font-bold'><span className='text-green'>.</span>projects</div>
                {config.projects.map((project) => {
                    return <ProjectCard
                        key={project.projectName}
                        projectName={project.projectName}
                        src={project.src}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                        skillsUsed={project.skillsUsed}
                        projectType={project.projectType}
                    />
                })}
            </div>
        </section>
    )
}

export default ProjectsSection