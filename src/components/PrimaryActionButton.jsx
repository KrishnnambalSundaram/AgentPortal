import SparkleIcon from "../assets/sparkle.svg";

export default function PrimaryActionButton({
  text,
  onClick,
  disabled = false,
}) {
  const subtleTextStroke = {
    textShadow: disabled
      ? `
        -0.25px 0 #B5B5B5,
         0.25px 0 #B5B5B5,
         0 0.25px #B5B5B5,
         0 -0.25px #B5B5B5
      `
      : `
        -0.25px 0 #4B371C,
         0.25px 0 #4B371C,
         0 0.25px #4B371C,
         0 -0.25px #4B371C
      `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        h-[48px]
        px-[32px]
        rounded-[12px]
        flex items-center justify-center
        gap-[10px]
        transition-all duration-200
        ${
          disabled
            ? "bg-[#F3F3F3] cursor-not-allowed border border-[#E0E0E0]"
            : "border border-[#2B2B2B]/70 hover:brightness-[0.97]"
        }
      `}
      style={
        !disabled
          ? {
              background: `
                linear-gradient(
                  165deg,
                  rgba(231,230,42,0.35) 0%,
                  rgba(185,120,178,0.35) 32%,
                  rgba(112,203,207,0.35) 62%,
                  rgba(228,99,86,0.35) 90%
                )
              `,
            }
          : {}
      }
    >
      {/* Sparkle always visible */}
      <img
        src={SparkleIcon}
        alt=""
        className={`w-[18px] h-[18px] ${
          disabled ? "opacity-70 grayscale brightness-[0.6]" : ""
        }`}
        draggable="false"
      />

      <span
        className={`
          font-['Outfit']
          font-bold
          text-[18px]
          leading-[1.4]
          tracking-[0px]
          ${disabled ? "text-[#9A9A9A]" : "text-[#4B371C]"}
        `}
        style={subtleTextStroke}
      >
        {text}
      </span>
    </button>
  );
}
