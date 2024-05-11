import BookDescription from "@/components/projects/BookDescription";
import GSMDescription from "@/components/projects/GSMDescription";
import LedsmarthomeDescription from "@/components/projects/LedsmarthomeDescription";
import OnlineRegisDescription from "@/components/projects/OnlineRegisDescription";
import SupernetMobileDescription from "@/components/projects/SupernetMobileDescription";

export const projects = [
    {
        clientLogoPath: require("../assets/images/common/logo-lucid.jpg"),
        clientName: "Lucid Co.",
        projectName: "Trip Planner Application",
        projectStatus: "Staging",
        projectTag: ["Express", "Typescript", "Backend Development", "MongoDB (Mongoose ORM)", "Monday.com", "VPS Ubuntu", "Google Maps API", "Firebase Cloud Messaging"],
        projectDescription: <OnlineRegisDescription />,
        projectScreenshots: [
            require("../assets/images/common/blank.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-lucid.jpg"),
        clientName: "Lucid Co.",
        projectName: "e-Commerce Application",
        projectStatus: "Staging",
        projectTag: ["Express", "Typescript", "Backend Development", "MongoDB (Mongoose ORM)", "Monday.com", "VPS Ubuntu", "Firebase Cloud Messaging"],
        projectDescription: <OnlineRegisDescription />,
        projectScreenshots: [
            require("../assets/images/common/blank.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Student Registration",
        projectStatus: "Prod",
        projectTag: ["Next.js 14", "Express.js", "SQL (MySQL)", "VPS CentOS", "Typescript", "Full Stack", "VA Payment Integration"],
        projectDescription: <OnlineRegisDescription />,
        projectScreenshots: [
            require("../assets/images/common/blank.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Book Reservation",
        projectStatus: "Prod",
        projectTag: ["Next.js 14", "Express.js", "SQL (MySQL)", "VPS CentOS", "Typescript", "Full Stack", "VA Payment Integration"],
        projectDescription: <BookDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/cinbud-online-book/1.png"),
            require("../assets/images/projects/screenshot/cinbud-online-book/2.png"),
            require("../assets/images/projects/screenshot/cinbud-online-book/3.png"),   
            require("../assets/images/projects/screenshot/cinbud-online-book/4.png"),   
            require("../assets/images/projects/screenshot/cinbud-online-book/5.png"),   
            require("../assets/images/projects/screenshot/cinbud-online-book/6.png"),   
            require("../assets/images/projects/screenshot/cinbud-online-book/7.png"),   
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Global School Management",
        projectStatus: "Prod",
        projectDescription: <GSMDescription />,
        projectTag: ["Windows Form", "SQL (MySQL)", "C#", "Crystal Report", "Desktop Application", "VA Payment Integration"],
        projectScreenshots: [
            require("../assets/images/projects/screenshot/cinbud/1.png"),
            require("../assets/images/projects/screenshot/cinbud/2.png"),
            require("../assets/images/projects/screenshot/cinbud/3.png"),
            require("../assets/images/projects/screenshot/cinbud/4.png"),
            require("../assets/images/projects/screenshot/cinbud/5.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-supernet.png"),
        clientName: "PT. Supernet Nusantara",
        projectName: "Membership Mobile App",
        projectStatus: "Prod",
        projectTag: ["React Native", "SQL (MSSQL)", "Express.js", "Typescript", "Full Stack"],
        projectDescription: <SupernetMobileDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/supernet/1.png"),
            require("../assets/images/projects/screenshot/supernet/2.png"),
            require("../assets/images/projects/screenshot/supernet/3.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-ledsmarthome.jpg"),
        clientName: "LED Smart Home",
        projectName: "Online Shop Management",
        projectStatus: "Prod",
        projectTag: ["Next.js 14", "Express.js", "SQL (MySQL)", "VPS CentOS", "Typescript", "Full Stack"],
        projectDescription: <LedsmarthomeDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/ledsmarthome/1.png"),
            require("../assets/images/projects/screenshot/ledsmarthome/2.png"),
            require("../assets/images/projects/screenshot/ledsmarthome/3.png"),
            require("../assets/images/projects/screenshot/ledsmarthome/4.png"),
            require("../assets/images/projects/screenshot/ledsmarthome/5.png"),
        ]
    },
]