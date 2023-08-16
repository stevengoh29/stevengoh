import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl bg-slate-800 m-auto p-10 mb-5">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mt-2">Supernet Member App</h1>
      <p className="mt-2">Project Year: 2022</p>
      <hr className="my-5" />
      <h2 className="text-2xl font-bold mb-2">Project Information</h2>
      <table className="w-full text-left table table-auto">
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Client</td>
          <td className="border px-3 py-2">PT. Supernet Nusantara</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Year</td>
          <td className="border px-3 py-2">2022</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Project App</td>
          <td className="border px-3 py-2">Mobile App</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Feature/Task</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>
                Check the monthly point (based on purchase/downline performance)
                and rewards
              </li>
              <li>Check the members' downline</li>
              <li>Register a new member by application</li>
              <li>Online order for products</li>
              <li>Update profile data</li>
              <li>Reset password using OTP</li>
            </ul>
          </td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Technologies</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>React Native</li>
              <li>Express.js (API)</li>
              <li>Microsoft SQL Server (Database)</li>
            </ul>
          </td>
        </tr>
      </table>

      <h2 className="text-2xl font-bold mt-5">Project Screenshots</h2>
      <div className="grid grid-cols-4 gap-10 mt-2">
        <Image
          src={require("../../../assets/projects/screenshot/supernet/1.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/2.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/3.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/4.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/5.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/6.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/7.jpg")}
          alt="Login Cinbud"
        />
        <Image
          src={require("../../../assets/projects/screenshot/supernet/8.jpg")}
          alt="Login Cinbud"
        />
      </div>
    </div>
  );
};

export default page;
