const config = {
    speed: 150,
    cvUrl: 'https://drive.google.com/file/d/1-XZAFRHI7IdpHF61Hso-HyfKIUjj7geG/view?usp=sharing',
    skills: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'Express',
        'Typescript',
        'Node.js',
        'MongoDB',
        'Mongoose',
        'Redux toolkit',
        'React Query',
        'Python'
    ],
    skillsNames: [
        '/react.svg',
        '/reduxToolkit.svg',
        '/tailwindCss.svg',
        '/typescript.svg',
        '/mongodb.svg',
        '/html.svg',
        '/css.svg',
        '/express.svg',
        '/materialUi.svg',
        '/reactQuery.svg',
        '/jwt.svg'
    ],
    skillNamesSpeed: 80,
    projects: [
        {
            src: '/clubBrugge.jpg',
            projectName: 'Football Club Merchandise Store',
            skillsUsed: ['React', 'Tailwind CSS', 'JWT', 'Express', 'Redux Toolkit', 'React Query', 'Typescript'],
            githubLink: 'https://github.com/sanchitttt/clubBrugge-frontend',
            deployedLink: 'https://club-brugge.vercel.app/',
            projectType: 'frontend'
        },
        {
            src: '/timetable.jpg',
            projectName: 'Timetable Generator For College',
            skillsUsed: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'ExcelJS', 'Framer Motion'],
            githubLink: 'https://github.com/sanchitttt/timetableFinal',
            deployedLink: 'https://bitmesratimetable.netlify.app/',
            projectType: 'full stack'
        },
        {
            src: '/kanban.jpg',
            projectName: 'Productivity Web App',
            skillsUsed: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'Context API', 'Cookie-Parser', 'JWT'],
            githubLink: 'https://github.com/sanchitttt/kanban-frontendmentor',
            deployedLink: 'https://kanban-sanchit.vercel.app/login',
            projectType: 'full stack'
        },
        {
            src: '/coincap.png',
            projectName: 'Coincap Clone',
            skillsUsed: ['React', 'Tanstack Query', 'Tailwind CSS', 'Axios', 'Material-Ui'],
            githubLink: 'https://github.com/sanchitttt/coincap-clone',
            deployedLink: 'https://coincapclonefrontendassignment.netlify.app',
            projectType: 'frontend'
        },
        {
            src: '/qkart.jpg',
            projectName: 'E-commerce Shopping',
            skillsUsed: ['React', 'Material UI', 'MongoDB', 'Express', 'Notistack'],
            githubLink: 'https://github.com/sanchitttt/qkart-frontend',
            deployedLink: 'https://qkart-sanchitt.netlify.app/',
            projectType: 'full stack'
        },
        {
            src: '/driffle.webp',
            projectName: 'Driffle About Landing Page ',
            githubLink: 'https://github.com/sanchitttt/driffle-assignment',
            deployedLink: 'https://driffleassignmentxcrio.vercel.app/',
            skillsUsed: ['Next.js', 'CSS animations'],
            projectType: 'frontend',
        },
        {
            src: '/qtrip.png',
            projectName: 'Tour Book Website',
            skillsUsed: ['Vanilla JS', 'CSS', 'HTML', 'DOM Manipulation', 'Local Storage'],
            githubLink: '',
            deployedLink: 'https://qtrip-dynamic-sanchit.netlify.app',
            projectType: 'frontend'
        },

    ],
    miniProjects: [
        {
            src: '/driffle.webp',
            projectName: 'Driffle About Page ',
            githubLink: 'https://github.com/sanchitttt/driffle-assignment',
            deployedLink: 'https://driffleassignmentxcrio.vercel.app/',
            skillsUsed: ['Next.js'],
            projectType: 'frontend',
        },

        {
            src: '/adminUI.webp',
            projectName: 'Geektrust Admin UI Challenge',
            githubLink: 'https://github.com/sanchitttt/geektrust-adminUI',
            skillsUsed: ['React', 'Material UI'],
            deployedLink: 'https://geektrust-admin-ui-nine.vercel.app/',
            projectType: 'frontend',
        },
        {
            src: '/zagDashboard.png',
            projectName: 'Zag Dashboard',
            githubLink: 'https://github.com/sanchitttt/zagAssignment-dashboard',
            deployedLink: 'https://zagdashboard.vercel.app/',
            skillsUsed: ['React', 'Redux Toolkit'],
            projectType: 'frontend',
            forDesktopOnly: true
        },
        {
            src: '/webure.webp',
            projectName: `Webure Landing Page`,
            githubLink: 'https://github.com/sanchitttt/webure-assignment',
            deployedLink: 'https://weburetechxcrio.netlify.app/',
            projectType: 'frontend',
            skillsUsed: ['React', 'Framer Motion', 'React Spring'],
            forDesktopOnly: true
        },

    ],
    certifications: [
        {
            src: '/mongodbCertificate.jpeg',
            title: 'MongoDB Certified Developer',
            details: 'Gave the C100DEV exam for being official MongoDB Certified Developer. Prepared for it for 3 months and studied for it from MongoDB University.',
            href: 'https://university.mongodb.com/certification/certificate/922514007?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'
        },
        {
            src: '/freeCodeCamp.jpg',
            title: 'JavaScript Algorithms and Data Structures',
            details: 'I completed the JavaScript Algorithm and Data Structures Certification course, where I learned the fundamentals of JavaScript, including variables, arrays, objects, loops, and functions. Throughout the program, I gained practical experience by creating algorithms to manipulate strings, factorialize numbers, and calculate the orbit of the International Space Station. I also explored Object Oriented Programming (OOP) and Functional Programming (FP) as important programming paradigms. Overall, the course equipped me with a strong understanding of JavaScript and its role in creating interactive web pages.',
            href: 'https://www.freecodecamp.org/certification/sanchitTewari/javascript-algorithms-and-data-structures'
        },
        {
            src: '/responsiveWebDesign.jpg',
            title: 'Responsive Web Design',
            details: 'I completed the Responsive Web Design Certification course, where I learned the languages essential for webpage development: HTML for content and CSS for design. The course covered the basics of HTML and CSS through projects like building a cat photo app. I also learned modern techniques such as CSS variables and best practices for accessibility. Additionally, I gained skills in creating responsive webpages using Flexbox and CSS Grid.',
            href: 'https://www.freecodecamp.org/certification/sanchitTewari/responsive-web-design'
        },
    ]
}

export default config;
