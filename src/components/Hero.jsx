import ExploreAgentsButton from "./ExploreAgentsButton";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[688px]"
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(231,230,42,0.38) 0%,
            rgba(112,203,207,0.38) 32%,
            rgba(185,120,178,0.38) 62%,
            rgba(228,99,86,0.38) 90%
          )
        `,
      }}
    >
      {/* soft white bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.22), rgba(255,255,255,0.22))",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-[847px] mx-auto pt-[200px] text-center">
        <h1 className="font-manrope font-bold text-[64px] leading-[78px] mb-[18px]">
          <span className="text-[#1F1F1F]">Your Gateway To </span>
          <span className="text-[#6BCFB7]">Agentic AI</span>
        </h1>

        <p className="font-['Outfit'] text-[28px] leading-[43px] text-[#565656] mb-[28px]">
          Access, explore, and collaborate with powerful AI agents
          designed for different needs
        </p>

        <ExploreAgentsButton />
      </div>
    </section>
  );
}





















































// import Logo from "./Logo";
// import VisitOurWebsiteButton from "./VisitOurWebsiteButton";
// import ExploreAgentsButton from "./ExploreAgentsButton";

// export default function Hero() {
//   return (
//     <section
//       className="relative w-full h-[688px]"
//       style={{
//         background: `
//           linear-gradient(
//             135deg,
//             rgba(231,230,42,0.38) 0%,
//             rgba(112,203,207,0.38) 32%,
//             rgba(185,120,178,0.38) 62%,
//             rgba(228,99,86,0.38) 90%
//           )
//         `,
//       }}
//     >
//       {/* 🌤 soft white bloom */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(rgba(255,255,255,0.22), rgba(255,255,255,0.22))",
//         }}
//       />

//       {/* HEADER — gap fixed */}
//       <div
//         className="
//           max-w-[1240px]
//           mx-auto
//           h-[80px]
//           px-[24px]
//           py-[16px]
//           flex
//           items-center
//           justify-between
//           rounded-[20px]
//           relative
//           z-10
//         "
//         style={{
//           background: "rgba(255,255,255,0.45)",
//           backdropFilter: "blur(12px)",
//           WebkitBackdropFilter: "blur(12px)",
//           boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
//         }}
//       >
//         <Logo />
//         <VisitOurWebsiteButton />
//       </div>

//       {/* HERO CONTENT */}
//       <div
//         className="
//           w-[847px]
//           mx-auto
//           mt-[120px]
//           flex
//           flex-col
//           items-center
//           text-center
//           relative
//           z-10
//         "
//       >
//         {/* TITLE */}
//         <h1
//           className="
//             font-manrope
//             font-bold
//             text-[64px]
//             leading-[78px]
//             tracking-[-0.01em]
//             mb-[18px]
//           "
//         >
//           <span className="text-[#1F1F1F]">Your Gateway To </span>
//           <span
//             className="text-[#6BCFB7]"
//             style={{
//               textShadow: "inset 1px 3px 4px rgba(0,0,0,0.25)",
//             }}
//           >
//             Agentic AI
//           </span>
//         </h1>

//         {/* SUBTITLE */}
//         <p
//           className="
//             font-['Outfit']
//             text-[28px]
//             leading-[43px]
//             text-[#565656]
//             max-w-[700px]
//             mb-[28px]
//           "
//         >
//           Access, explore, and collaborate with powerful AI agents
//           designed for different needs
//         </p>

//         {/* CTA */}
//         <ExploreAgentsButton />
//       </div>

//       {/* bottom separator shadow */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[1px]"
//         style={{
//           boxShadow: "0px -4px 12px rgba(0,0,0,0.18)",
//         }}
//       />
//     </section>
//   );
// }
