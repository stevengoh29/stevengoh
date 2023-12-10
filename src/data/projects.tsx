import BookDescription from "@/components/projects/BookDescription";
import GSMDescription from "@/components/projects/GSMDescription";
import LedsmarthomeDescription from "@/components/projects/LedsmarthomeDescription";
import OnlineRegisDescription from "@/components/projects/OnlineRegisDescription";
import SupernetMobileDescription from "@/components/projects/SupernetMobileDescription";

export const projects = [
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
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Book Reservation",
        projectStatus: "Staging",
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
        clientLogoPath: require("../assets/images/common/logo-supernet.png"),
        clientName: "PT. Supernet Nusantara",
        projectName: "Membership Mobile App",
        projectStatus: "Production",
        projectDescription: <SupernetMobileDescription />,
        projectScreenshots: [
            require("../assets/images/projects/screenshot/supernet/1.png"),
            require("../assets/images/projects/screenshot/supernet/2.png"),
            require("../assets/images/projects/screenshot/supernet/3.png"),
        ]
    },
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
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
    {
        clientLogoPath: require("../assets/images/common/logo-cinbud.png"),
        clientName: "Cinta Budaya School",
        projectName: "Online Student Registration",
        projectStatus: "Development",
        projectDescription: <OnlineRegisDescription />,
        projectScreenshots: [
            require("../assets/images/common/blank.png"),
        ]
    }
]