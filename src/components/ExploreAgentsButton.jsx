import exploreAgentsIcon from "../assets/explore-agents-button.svg";

export default function ExploreAgentsButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Explore AI Agents"
      className="
        w-[221px]
        h-[56px]
        bg-transparent
        p-0
        border-0
        appearance-none
        cursor-pointer
        focus:outline-none
        hover:scale-[1.02]
        active:scale-[0.98]
        transition-transform
      "
    >
      <img
        src={exploreAgentsIcon}
        alt=""
        className="w-full h-full object-contain"
        draggable="false"
      />
    </button>
  );
}
