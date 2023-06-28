import config from "@/app/config"
import ProjectCard from "../ProjectCard"

function ProjectsSection() {
    return (
        <section className='w-[100vw] h-[80vh] flex  justify-center mt-[200px]'>
            <div className='max-w-[1570px] w-[100%]'>
                <div className='mb-[60px] text-[72px] text-white font-bold'><span className='text-green'>.</span>projects</div>
                {config.projects.map((project) => {
                    return <ProjectCard
                        key={project.projectName}
                        projectName={project.projectName}
                        src={project.src}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                        skillsUsed={project.skillsUsed}
                    />
                })}
            </div>
        </section>
    )
}

export default ProjectsSection