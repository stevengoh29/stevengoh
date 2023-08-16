import Breadcrumb from "@/components/Breadcrumb";
import ProjectCard from "@/components/ProjectCard";

const page = () => {
  return (
    <div className="max-w-screen-xl bg-slate-800 m-auto p-10 mb-5">
      <h1 className="text-3xl font-bold mb-2">My Projects</h1>
      <Breadcrumb />
      <p className="mt-5">Below are projects that I have ever worked on.</p>
      <hr className="my-5" />
      <section className="w-full grid grid-cols-3 gap-y-5">
        <ProjectCard
          source={require("../../assets/projects/cinbud.png")}
          title="Cashflow Management System"
          caption="2022-2023"
          tags={[
            { color: "blue", label: "BCA Virtual Account" },
            { color: "green", label: "NodeJs" },
            { color: "gray", label: "ExpressJs" },
            { color: "yellow", label: "MySQL" },
            { color: "red", label: "VPS" },
            { color: "purple", label: "Winforms" },
            { color: "gray", label: "NextJs" },
          ]}
          href="/projects/cms"
          bgColor="white"
        />

        <ProjectCard
          source={require("../../assets/projects/supernet.png")}
          title="Member Application"
          caption="2022"
          tags={[
            { color: "blue", label: "React Native" },
            { color: "gray", label: "NextJs" },
            { color: "green", label: "NodeJs" },
            { color: "gray", label: "ExpressJs" },
            { color: "red", label: "MS SQL" },
          ]}
          href="/projects/supernet"
          bgColor="white"
        />

        <ProjectCard
          source={require("../../assets/projects/ledsmarthome.jpg")}
          title="Online Stock Management"
          caption="2023"
          tags={[
            { color: "gray", label: "NextJs" },
            { color: "green", label: "NodeJs" },
            { color: "gray", label: "ExpressJs" },
            { color: "yellow", label: "MySQL" },
            { color: "red", label: "VPS" },
          ]}
          href="/projects/ledsmarthome"
          bgColor="#F3BD49"
        />
        <ProjectCard
          source={require("../../assets/projects/blank.jpg")}
          title="School Academic System (API)"
          caption="Mock Project"
          tags={[{ color: "green", label: "Spring" }]}
          href="/projects/school"
          bgColor="#EFEFEF"
        />
      </section>
    </div>
  );
};

export default page;
