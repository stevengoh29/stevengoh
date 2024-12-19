import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl bg-slate-800 m-auto p-10 mb-5">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mt-2">
        Mini Academic School Management
      </h1>
      <p className="mt-2 bg-red-100 text-red-800">Mock Project</p>
      <hr className="my-5" />
      <h2 className="text-2xl font-bold mb-2">Project Information</h2>
      <table className="w-full text-left table table-auto">
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Client</td>
          <td className="border px-3 py-2 text-red-500">Mock Project</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2">Year</td>
          <td className="border px-3 py-2">2023</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Project App</td>
          <td className="border px-3 py-2">Web API</td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Feature/Task</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>Term Management</li>
              <li>Student Management</li>
              <li>Course Management</li>
              <li>Score Management</li>
              <li>Student Academic Report</li>
            </ul>
          </td>
        </tr>
        <tr className="border px-3 py-2 font-medium text-gray-900 dark:text-white">
          <td className="border px-3 py-2 whitespace-nowrap">Technologies</td>
          <td className="border px-3 py-2">
            <ul className="list-inside list-disc">
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>Spring JPA</li>
              <li>Java Mail Sender (for student activation)</li>
              <li>Hibernate</li>
              <li>Lombok</li>
              <li>MySQL (Database)</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default page;
