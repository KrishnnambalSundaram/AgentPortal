import EmptyStateCard from "../components/EmptyStateCard";
import EmptyAgentsIcon from "../assets/empty-agent-icon.svg";

export default function Agents() {
  return (
    <div className="w-full">
      {/* Page title */}
      <div className="pt-[40px] pl-[24px]">
        <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
          Agents
        </h1>
      </div>

      <EmptyStateCard
        icon={EmptyAgentsIcon}
        title="You haven’t added any agents"
        description="Start by adding your first agent to manage and explore their capabilities"
        actionText="Add Agent"
        onAction={() => console.log("Add Agent")}
      />
    </div>
  );
}


// import NoAgentPanel from "./NoAgentPanel";

// export default function Agents() {
//   return (
//     <div className="h-full flex flex-col">
      
//       {/* Page Title */}
//       <div className="px-[32px] pt-[32px]">
//         <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
//           Agents
//         </h1>
//       </div>

//       {/* Content */}
//       <div className="flex-1 flex items-center justify-center">
//         <NoAgentPanel />
//       </div>

//     </div>
//   );
// }






















// import NoAgentPanel from "./NoAgentPanel";

// export default function Agents() {
//   return (
    
//     <div className="w-full">

//       {/* PAGE TITLE */}
//       <div className="pt-[40px] pl-[250px]">
//         <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
//           Agents
//         </h1>
//       </div>

//       <NoAgentPanel />
//     </div>
//   );
// }
