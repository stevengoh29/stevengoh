import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl bg-slate-800 m-auto p-10 mb-5">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mt-2">Online Stock Management</h1>
      <p className="mt-2">Project Year: 2023</p>
      <hr className="my-5" />
      <h2 className="text-2xl font-bold mb-2">Project Information</h2>
      <table className="w-full text-left table table-auto">
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Client</td>
          <td className="border px-3 py-2">ledsmarthome</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Year</td>
          <td className="border px-3 py-2">2023</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Project App</td>
          <td className="border px-3 py-2">Web App</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Feature/Task</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>Stock Management</li>
              <li>Purchase Management</li>
              <li>Sales Management</li>
              <li>Product Return Management</li>
              <li>Product Stock Management</li>
              <li>Report and Dashboard</li>
            </ul>
          </td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Technologies</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>
                Next.js (for online student books purchase every new term)
              </li>
              <li>Express.js (API)</li>
              <li>MySQL (Database)</li>
              <li>
                Virtual Private Server (for hosting the database and
                application)
              </li>
            </ul>
          </td>
        </tr>
      </table>

      <h2 className="text-2xl font-bold mt-5">Project Screenshots</h2>
      <div className="grid grid-cols-2 gap-10 mt-2">
        <Image
          src={require("../../../assets/projects/screenshot/ledsmarthome/1.png")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/ledsmarthome/2.png")}
          alt="Home ledsmarthome"
        />
        <Image
          src={require("../../../assets/projects/screenshot/ledsmarthome/3.png")}
          alt="Home ledsmarthome"
        />
        <Image
          src={require("../../../assets/projects/screenshot/ledsmarthome/4.png")}
          alt="Home ledsmarthome"
        />
        <Image
          src={require("../../../assets/projects/screenshot/ledsmarthome/5.png")}
          alt="Home ledsmarthome"
        />
      </div>
    </div>
  );
};

export default page;
