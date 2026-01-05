import GlobeIcon from "../assets/globe.svg";

export default function VisitOurWebsiteButton() {
  return (
    <button
      className="
        inline-flex
        items-center
        gap-[12px]

        h-[56px]
        px-[32px]

        rounded-[12px]

        font-outfit
        text-[14px]
        font-medium
        text-[#252525]

        bg-[#FFFFFF]
        border border-[#E6E6E6]

        transition-shadow
        hover:shadow-[0_8px_22px_rgba(0,0,0,0.12)]
      "
      style={{
        boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
      }}
    >
      <img
        src={GlobeIcon}
        alt=""
        className="w-[16px] h-[16px]"
        draggable="false"
      />

      <span
        style={{
          textShadow: "0 1px 1px rgba(0,0,0,0.18)",
        }}
      >
        Visit Our Website
      </span>
    </button>
  );
}
