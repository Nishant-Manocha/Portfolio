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
import ProjectThree from '../images/Project/BookStoreProject3.png'
import ProjectFour from '../images/Project/StudyNotion.png'


export const ProjectsData = [
    {
        id:1,
        hoverId:"01",
        title:"Razorpay Clone",
        desc:"Built a web application that closely mimicked the design of the popular Indian payment gateway, Razor Pay, using HTML & Tailwind CSS.",
        githubLink:"https://github.com/Nishant-Manocha/RazorpayClone",
        webLink:"https://razorpay-clone-mu-one.vercel.app/",
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
        githubLink:"https://github.com/Nishant-Manocha/DiscordClone",
        webLink:"https://discord-clone-roan-iota.vercel.app/",
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

    },
    {
        id:3,
        hoverId:"03",
        title:"Book Store",
        desc:"This responsive college project is a comprehensive book management system. It features user-friendly Login and Sign-Up pages, allowing account creation and profile management. Users can browse, like, and download books for offline use, with a Contact Us page for inquiries and support.",
        githubLink:"https://github.com/Nishant-Manocha/Book-Store",
        webLink:"https://book-store-liard.vercel.app/",
        ProjectImage:ProjectThree,
        icons:[
            {
                language:REACT
            },
            {
                language:CSS
            },
            {
                language:TAILWIND
            },
            {
                language:NODEJS
            },
            {
                language:EXPRESS
            },
            {
                language:MONGODB
            },
        ]

    },
    {
        id:4,
        hoverId:"04",
        title:"Study Notion",
        desc:"This Course Selling Platform features separate dashboards for teachers to create and manage courses, and for students to browse, purchase, and access courses, with secure token-based authentication for all users.",
        githubLink:"https://github.com/Nishant-Manocha/Study-Notion",
        webLink:"https://study-notion-front-one.vercel.app/",
        ProjectImage:ProjectFour,
        icons:[
            {
                language:REACT
            },
            {
                language:CSS
            },
            {
                language:TAILWIND
            },
            {
                language:NODEJS
            },
            {
                language:EXPRESS
            },
            {
                language:MONGODB
            },
        ]

    }
]