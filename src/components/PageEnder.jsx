import PageEnderBg from "../assets/page-ender-bg.svg";

export default function PageEnder() {
  return (
    <div className="relative w-full">
      
      {/* SVG BACKGROUND */}
      <img
        src={PageEnderBg}
        alt="Page Ender Background"
        className="w-full h-auto block"
      />

      {/* COPYRIGHT TEXT — FIGMA SPECIFIC */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[32px]          /* ⬅ adjust to match Figma */
          w-[352px]
          text-center
          font-outfit
          text-[16px]
          leading-[20px]
          text-white
          pointer-events-none
        "
      >
        © {new Date().getFullYear()} Inflecto Technologies. All Rights Reserved.
      </div>
    </div>
  );
}
