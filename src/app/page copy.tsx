// import LogoGroupContainer from "@/components/LogoGroupContainer";
// import {
//   backEndToDisplay,
//   databaseToDisplay,
//   frontEndToDisplay,
// } from "@/data/logoDisplay";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// 
// const page = () => {
//   return (
//     <div className="h-full m-auto flex flex-col items-center justify-center font-bold">
//       <p className="text-2xl mb-2 text-slate-400">Hi, my name is Steven</p>
//       <h1 className="text-4xl">Welcome to my personal portfolio website!</h1>
// 
//       <div className="w-[72rem] flex justify-center gap-10 bg-slate-600 shadow-xl rounded-xl my-14">
//         <LogoGroupContainer logos={frontEndToDisplay} />
//         <LogoGroupContainer logos={backEndToDisplay} />
//         <LogoGroupContainer logos={databaseToDisplay} />
//       </div>
// 
//       <div className="flex gap-5">
//         <Link
//           href={"/projects"}
//           className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-md"
//         >
//           My Projects
//         </Link>
//         <Link
//           href={"/contact"}
//           className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-3 px-5 rounded duration-300 uppercase text-md"
//         >
//           Contact me
//         </Link>
//       </div>
//     </div>
//   );
// };
// 
// export default page;
