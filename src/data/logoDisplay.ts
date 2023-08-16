import CSharpLogo from "../assets/csharp.png";
import ExpressLogo from "../assets/express.png";
import MongoLogo from "../assets/mongodb.png";
import MysqlLogo from "../assets/mysql.png";
import NextLogo from "../assets/nextjs.png";
import ReactLogo from "../assets/react.png";
import SpringLogo from "../assets/spring.png";
import SqlLogo from "../assets/sqlserver.png";

export const frontEndToDisplay = [
  {
    source: ReactLogo,
    width: 64,
    height: 64,
    label: "React (Native)",
  },
  {
    source: NextLogo,
    width: 64,
    height: 64,
    label: "NextJs",
  },
];

export const backEndToDisplay = [
  {
    source: ExpressLogo,
    width: 64,
    height: 64,
    label: "ExpressJs",
  },
  {
    source: SpringLogo,
    width: 64,
    height: 64,
    label: "Spring",
  },
  {
    source: CSharpLogo,
    width: 60,
    height: 60,
    label: "CSharp",
  },
];

export const databaseToDisplay = [
  {
    source: MysqlLogo,
    width: 64,
    height: 64,
    label: "MySQL",
  },
  {
    source: SqlLogo,
    width: 80,
    height: 80,
    label: "MsSQL",
  },
  {
    source: MongoLogo,
    width: 64,
    height: 64,
    label: "Mongo",
  },
];
