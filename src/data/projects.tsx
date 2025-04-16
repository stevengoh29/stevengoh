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
    projectDescription: string; // Assuming the description is a React component
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
            projectDescription: `
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li>Place their orders directly with the client's company</li>
                    <li>Check available warehouse inventory</li>
                    <li>Download invoices</li>
                    <li>Track historical purchases and payments</li>
                    <li>Lodge complaints and feedback directly</li>
                </ul>
            `,
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
            projectDescription: `
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li>Plan and strategize key activities with merchandisers</li>
                    <li>Ensure sufficient products are available at every retail shelf</li>
                    <li>Gain visibility of inventory movements</li>
                    <li>Maximize product revenues</li>
                </ul>
            `,
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
            projectDescription: `
                <p>Integrates seamlessly with field sales merchandising, enabling:</p>
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li>Supervisors to monitor merchandisers’ activity history</li>
                    <li>Quick identification of any suspicious behavior</li>
                    <li>Enhanced oversight and operational integrity</li>
                </ul>
            `,
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
            projectDescription: "Providing member's information, such as the downline points, listing and tracking rewards",
            projectScreenshots: [
                '/assets/thumbnails/supernet-membership-app.png'
                // require("../assets/images/projects/screenshot/supernet/1.png"),
                // require("../assets/images/projects/screenshot/supernet/2.png"),
                // require("../assets/images/projects/screenshot/supernet/3.png"),
            ]
        }
    ],
    'Web App / API': [
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Revnology - Malaysia",
            projectName: "Last Wars Academy - Wiki CMS",
            projectStatus: "Production",
            projectDescription: `
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li>Integrated Strapi as a headless CMS to allow easy content creation and updates by non-developers</li>
                    <li>Deployed with SEO-friendly structure and dynamic routing for game-related pages</li>
                </ul>
            `,
            projectTechStack: 'NextJS, Strapi CMS, PostgreSQL',
            projectScreenshots: [
                "/assets/projects/last-war-cms/1.png",
                "/assets/projects/last-war-cms/2.png",
                "/assets/projects/last-war-cms/3.png",
                "/assets/projects/last-war-cms/4.png",
                "/assets/projects/last-war-cms/5.png",
                "/assets/projects/last-war-cms/6.png",
            ]
        },
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Revnology - Malaysia",
            projectName: "Online Web Registration",
            projectStatus: "Production",
            projectDescription: `
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li>In the 2024 academic term, has successfully registered 800-1000 new students. </li>
                    <li><strong>100% online registration:</strong> Eliminates the need for in-person visits, reducing administrative workload.</li>
                    <li><strong>BCA Virtual Account integration:</strong> Secure and real-time tuition payment processing.</li>
                </ul>
            `,
            projectTechStack: 'React Native, Expo, React Redux, OneSignal, Sentry',
            projectScreenshots: [
                "/assets/projects/cinbud-regis-online/1.png",
                "/assets/projects/cinbud-regis-online/2.png",
                "/assets/projects/cinbud-regis-online/3.png",
                "/assets/projects/cinbud-regis-online/4.png",
                "/assets/projects/cinbud-regis-online/5.png",
                "/assets/projects/cinbud-regis-online/6.png",
            ]
        },
        {
            clientLogoPath: require("../assets/images/common/logo-interact.png"),
            clientName: "Revnology - Malaysia",
            projectName: "Online Book Reservation",
            projectStatus: "Production",
            projectDescription: `
                <ul style="list-style-type: disc; padding-left: 12px;">
                    <li><strong>Significant queue reduction:</strong> Minimizes in-person wait times at the school store.</li>
                    <li><strong>Automated sales and inventory tracking:</strong> All transactions and stock movements are systematically recorded.</li>
                    <li><strong>Efficient order management:</strong> Eliminates manual queuing, even during peak order periods.</li>
                </ul>

            `,
            projectTechStack: 'React Native, Expo, React Redux, OneSignal, Sentry',
            projectScreenshots: [
                "/assets/projects/cinbud-online-book/1.png",
                "/assets/projects/cinbud-online-book/2.png",
                "/assets/projects/cinbud-online-book/3.png",
                "/assets/projects/cinbud-online-book/4.png",
                "/assets/projects/cinbud-online-book/5.png",
                "/assets/projects/cinbud-online-book/6.png",
            ]
        },
        // {
        //     clientLogoPath: require("../assets/images/common/logo-interact.png"),
        //     clientName: "Revnology - Malaysia",
        //     projectName: "Global School Management",
        //     projectStatus: "Production",
        //     projectDescription: "",
        //     projectTechStack: 'React Native, Expo, React Redux, OneSignal, Sentry',
        //     projectScreenshots: [
        //         '/assets/thumbnails/supervisor-merchandizer-app.png'
        //         // require("../assets/images/projects/screenshot/interact/1.png"),
        //         // require("../assets/images/projects/screenshot/interact/2.png"),
        //         // require("../assets/images/projects/screenshot/interact/3.png"),
        //     ]
        // },
    ]
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