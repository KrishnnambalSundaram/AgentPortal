export default function AddNewAgentButton({
  text = "Add New Agent",
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        h-[58px]
        w-[512px]
        rounded-[8px]
        flex
        items-center
        justify-center

        font-outfit
        text-[16px]
        font-medium
        text-[#333333]

        border-0
        outline-none
        focus:outline-none
        focus:ring-0
        appearance-none

        ${className}
      `}
      style={{
        background: `
          linear-gradient(
            165deg,
            rgba(231,230,42,0.35) 0%,
            rgba(185,120,178,0.35) 32%,
            rgba(112,203,207,0.35) 62%,
            rgba(228,99,86,0.35) 90%
          )
        `,
      }}
    >
      {text}
    </button>
  );
} 