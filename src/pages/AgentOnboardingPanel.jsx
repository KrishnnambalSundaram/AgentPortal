import Logo from "../components/Logo";
import AddNewAgentButton from "../components/AddNewAgentButton";

const labelStyle = {
  textShadow: "0 1px 0 rgba(0,0,0,0.06)",
};

export default function AgentOnboardingPanel() {
  return (
    <div className="min-h-screen w-full">
      {/* 
        IMPORTANT:
        - pt controls top spacing
        - pb controls bottom breathing space (fixes laptop vs monitor issue)
      */}
      <div className="flex flex-col items-center pt-[64px] pb-[96px]">

        {/* ================= LOGO ================= */}
        <Logo />

        {/* ================= TITLE + SUBTITLE ================= */}
        <div className="mt-[32px] flex flex-col items-center gap-[12px]">
          <h1 className="font-manrope text-[36px] font-bold text-[#4B371C] text-center">
            Agent Onboarding Panel
          </h1>

          <p className="font-outfit text-[16px] text-[#727272] text-center">
            Enter the agent’s details and settings to complete onboarding
          </p>
        </div>

        {/* ================= FORM ================= */}
        <div className="mt-[64px] w-full flex justify-center">
          <div className="w-full max-w-[1056px]">
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[32px]">

              {/* Name of Agent */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  Name of Agent
                </label>
                <input
                  className="
                    h-[44px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    outline-none
                  "
                />
              </div>

              {/* TechStack */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  TechStack
                </label>
                <input
                  className="
                    h-[44px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    outline-none
                  "
                />
              </div>

              {/* Link (Optional) */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  Link (Optional)
                </label>
                <input
                  className="
                    h-[44px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    outline-none
                  "
                />
              </div>

              {/* Demo Video URL */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  Demo Video URL
                </label>
                <input
                  className="
                    h-[44px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    outline-none
                  "
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  Description
                </label>
                <textarea
                  className="
                    w-full
                    min-h-[120px]
                    max-h-[220px]
                    resize-none
                    overflow-y-auto
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    py-[12px]
                    outline-none
                  "
                />
              </div>

              {/* Capability */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="font-outfit text-[16px] text-[#4A4A4A]"
                  style={labelStyle}
                >
                  Capability
                </label>
                <textarea
                  className="
                    w-full
                    min-h-[120px]
                    max-h-[220px]
                    resize-none
                    overflow-y-auto
                    rounded-[8px]
                    border
                    border-[#CACACA]
                    bg-white
                    px-[16px]
                    py-[12px]
                    outline-none
                  "
                />
              </div>

            </div>
          </div>
        </div>

        {/* ================= ADD NEW AGENT BUTTON ================= */}
        <div className="mt-[48px]">
          <AddNewAgentButton />
        </div>

      </div>
    </div>
  );
}
