export default function EmptyStateCard({
  icon,
  title,
  description,
  actionText,
  onAction,
}) {
  return (
    <div className="w-full flex justify-center items-start py-[64px]">
      <div
        style={{ backgroundColor: "#FFFFFF" }} // EXACT sidebar white
        className="
          w-[1158px]
          min-h-[591px]
          rounded-[16px]
          flex
          flex-col
          items-center
        "
      >
        {/* Icon */}
        <div className="pt-[48px]">
          <img src={icon} alt="" className="w-[225px] h-[225px]" />
        </div>

        {/* Text */}
        <div className="mt-[32px] w-[515px] flex flex-col items-center gap-[16px]">
          <h2 className="font-nunito font-semibold text-[28px] text-[#202020] text-center">
            {title}
          </h2>

          <p className="font-nunito text-[16px] text-[#626262] text-center">
            {description}
          </p>

          {actionText && (
            <button
              onClick={onAction}
              style={{ color: "#FFFFFF" }}
              className="
                mt-[8px]
                w-[320px]
                h-[58px]
                rounded-[12px]
                bg-[#B978B2]
                text-[16px]
                font-nunito
                font-semibold
                border-0
                hover:opacity-90
                transition
              "
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
