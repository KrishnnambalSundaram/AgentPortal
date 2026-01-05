import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Left */}
      <Sidebar />

      {/* Right */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}



// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// export default function MainLayout() {
//   return (
//     <div className="flex min-h-screen bg-[#F5F5F5]">
//       {/* Left */}
//       <Sidebar />

//       {/* Right */}
//       {/* <div className="flex-1"> */}
//         <div className="flex-1 overflow-hidden">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

