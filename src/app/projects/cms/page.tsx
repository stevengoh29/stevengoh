import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl bg-slate-800 m-auto p-10 mb-5">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mt-2">Cashflow Management System</h1>
      <p className="mt-2">Project Year: 2022-2023</p>
      <hr className="my-5" />
      <h2 className="text-2xl font-bold mb-2">Project Information</h2>
      <table className="w-full text-left table table-auto">
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Client</td>
          <td className="border px-3 py-2">Cinta Budaya School</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Year</td>
          <td className="border px-3 py-2">2022-2023</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Project App</td>
          <td className="border px-3 py-2">
            Desktop App, Web App, API for BCA VA
          </td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Feature/Task</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>Academic Management (classes, students, scholarship)</li>
              <li>
                Student Bill Management (include special case, such as
                scholarship)
              </li>
              <li>Incoming or Outgoing Cashflow Management</li>
              <li>
                API for students' payment via Virtual Account (integrating with
                Bank Central Asia)
              </li>
              <li>
                Maintains server (backup, deployment, housekeeping) to make sure
                the application performs as expected
              </li>
            </ul>
          </td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Technologies</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>BCA Virtual Account (for students paying the school fee)</li>
              <li>Express.js (API)</li>
              <li>MySQL (Database)</li>
              <li>
                Virtual Private Server (for hosting the database and
                application)
              </li>
              <li>
                Next.js (for online student books purchase every new term)
              </li>
              <li>
                Windows Form (for the school's staff in handling cashflow)
              </li>
            </ul>
          </td>
        </tr>
      </table>

      <h2 className="text-2xl font-bold mt-5">Project Screenshots</h2>
      <div className="grid grid-cols-2 gap-10 mt-2">
        <Image
          src={require("../../../assets/images/projects/screenshot/cinbud/1.png")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/images/projects/screenshot/cinbud/2.png")}
          alt="Home Cinbud"
        />
        <Image
          src={require("../../../assets/images/projects/screenshot/cinbud/3.png")}
          alt="Home Cinbud"
        />
        <Image
          src={require("../../../assets/images/projects/screenshot/cinbud/4.png")}
          alt="Home Cinbud"
        />
        <Image
          src={require("../../../assets/images/projects/screenshot/cinbud/5.png")}
          alt="Home Cinbud"
        />
      </div>
    </div>
  );
};

export default page;
