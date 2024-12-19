import BookDescription from "@/components/projects/BookDescription";
import EcommerceDescription from "@/components/projects/EcommerceDescription";
import GSMDescription from "@/components/projects/GSMDescription";
import LedsmarthomeDescription from "@/components/projects/LedsmarthomeDescription";
import MerchandizerDescription from "@/components/projects/MerchandizerDescription";
import OnlineRegisDescription from "@/components/projects/OnlineRegisDescription";
import SupernetMobileDescription from "@/components/projects/SupernetMobileDescription";

export type Project = {
    clientLogoPath: any; // Replace 'any' with ImageSourcePropType if using React Native's Image
    clientName: string;
    projectName: string;
    projectStatus: string;
    projectTechStack: string;
    projectDescription: JSX.Element; // Assuming the description is a React component
    projectScreenshots: any[]; // Replace 'any' with ImageSourcePropType if applicable
};

export type ProjectCategory = {
    [category: string]: Project[];
};

export const PROJECTS: ProjectCategory = {
    'Mobile App': [
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Interact - Malaysia",
            projectName: "Sales Retail Mobile App",
            projectStatus: "Production",
            projectDescription: <MerchandizerDescription />,
            projectTechStack: 'React Native, Expo, React Redux, SQLite, OneSignal, Sentry',
            projectScreenshots: [
                '/assets/thumbnails/interact-sales-app.png',
                // require("../assets/images/projects/screenshot/interact/2.png"),
                // require("../assets/images/projects/screenshot/interact/3.png"),
            ]
        },
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Interact - Malaysia",
            projectName: "Merchandizer Mobile App",
            projectStatus: "Production",
            projectDescription: <MerchandizerDescription />,
            projectTechStack: 'React Native, Expo, React Redux, SQLite, OneSignal, Sentry',
            projectScreenshots: [
                '/assets/thumbnails/interact-merchandizing-app.png'
                // require("../assets/images/projects/screenshot/interact/1.png"),
                // require("../assets/images/projects/screenshot/interact/2.png"),
                // require("../assets/images/projects/screenshot/interact/3.png"),
            ]
        },
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Interact - Malaysia",
            projectName: "Merchandizer Supervisor App",
            projectStatus: "Production",
            projectDescription: <MerchandizerDescription />,
            projectTechStack: 'React Native, Expo, React Redux, OneSignal, Sentry',
            projectScreenshots: [
                '/assets/thumbnails/supervisor-merchandizer-app.png'
                // require("../assets/images/projects/screenshot/interact/1.png"),
                // require("../assets/images/projects/screenshot/interact/2.png"),
                // require("../assets/images/projects/screenshot/interact/3.png"),
            ]
        },
        {
            clientLogoPath: require("../assets/images/common/logo-supernet.png"),
            clientName: "PT. Supernet Nusantara",
            projectName: "Membership Mobile App",
            projectStatus: "Production",
            projectTechStack: 'React Native, Expo, Firebase',
            projectDescription: <SupernetMobileDescription />,
            projectScreenshots: [
                '/assets/thumbnails/supernet-membership-app.png'
                // require("../assets/images/projects/screenshot/supernet/1.png"),
                // require("../assets/images/projects/screenshot/supernet/2.png"),
                // require("../assets/images/projects/screenshot/supernet/3.png"),
            ]
        }
    ],
    'Web App': [],
    'Backend API': []
}

export const projects = [
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Student Registration",
        projectStatus: "Production",
        projectDescription: <OnlineRegisDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/cinbud-regis-online/1.png"),
            require("../assets/images/projects/screenshot/cinbud-regis-online/2.png"),
            require("../assets/images/projects/screenshot/cinbud-regis-online/3.png"),
            require("../assets/images/projects/screenshot/cinbud-regis-online/4.png"),
            require("../assets/images/projects/screenshot/cinbud-regis-online/5.png"),
            require("../assets/images/projects/screenshot/cinbud-regis-online/6.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Book Reservation",
        projectStatus: "Production",
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
        projectStatus: "Production",
        projectDescription: <GSMDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/cinbud/1.png"),
            require("../assets/images/projects/screenshot/cinbud/2.png"),
            require("../assets/images/projects/screenshot/cinbud/3.png"),
            require("../assets/images/projects/screenshot/cinbud/4.png"),
            require("../assets/images/projects/screenshot/cinbud/5.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/doodle.jpg"),
        clientName: "DUMMY PROJECT",
        projectName: "eCommerce Application",
        projectStatus: "Development",
        projectDescription: <EcommerceDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/ecommerce/1.png"),
            require("../assets/images/projects/screenshot/ecommerce/2.png"),
            require("../assets/images/projects/screenshot/ecommerce/3.png"),
            require("../assets/images/projects/screenshot/ecommerce/4.png"),
            require("../assets/images/projects/screenshot/ecommerce/5.png"),
            require("../assets/images/projects/screenshot/ecommerce/6.png"),
            require("../assets/images/projects/screenshot/ecommerce/7.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-ledsmarthome.jpg"),
        clientName: "LED Smart Home",
        projectName: "Online Shop Management",
        projectStatus: "Production",
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