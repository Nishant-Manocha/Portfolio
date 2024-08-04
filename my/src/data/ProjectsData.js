import HTML from '../images/Languages/html.png'
import CSS from '../images/Languages/CSS.png'
import JAVASCRIPT from '../images/Languages/Javascript.svg'
import REACT from '../images/Languages/React.png'
import TAILWIND from '../images/Languages/Tailwind.png'
import EXPRESS from '../images/Languages/Express.png'
import MONGODB from '../images/Languages/MongoDB.svg'
import NODEJS from '../images/Languages/NodeJs.svg'
import ProjectOne from '../images/Project/RazorpayProject1.png'
import ProjectTwo from '../images/Project/DiscordProject2.png'


export const ProjectsData = [
    {
        id:1,
        hoverId:"01",
        title:"Razorpay Clone",
        desc:"Built a web application that closely mimicked the design of the popular Indian payment gateway, Razor Pay, using HTML & Tailwind CSS.",
        githubLink:"#",
        webLink:"#",
        ProjectImage:ProjectOne,
        icons:[
            {
                language:HTML
            },
            {
                language:CSS
            },
            {
                language:TAILWIND
            },
        ]

    },
    {
        id:2,
        hoverId:"02",
        title:"Discord Clone",
        desc:"Built a Discord clone web app using HTML, CSS and Tailwind CSS. It's a website that has been designed to mimic the design of the popular chat and voice communication platform, Discord.",
        githubLink:"#",
        webLink:"#",
        ProjectImage:ProjectTwo,
        icons:[
            {
                language:HTML
            },
            {
                language:CSS
            },
            {
                language:TAILWIND
            },
        ]

    }
]