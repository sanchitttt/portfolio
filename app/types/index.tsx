export interface ProjectCardType {
    projectName: string,
    githubLink: string,
    deployedLink: string,
    src: string,
    skillsUsed?: string[],
    forDesktopOnly?: boolean,
    projectType: string
}

export interface CertificationCardType {
    src: string
    title: string
    details: string
    href: string
}