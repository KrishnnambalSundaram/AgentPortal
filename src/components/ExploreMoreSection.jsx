import VisitOurWebsiteButton from "../components/VisitOurWebsiteButton";
import SkyBlueBg from "../assets/skyblue-bg.svg";

export default function ExploreMoreSection() {
  return (
    <section
      className="
        w-full
        mt-[40px]
        relative
        bg-[#EDFEFF]
      "
    >
      {/* Decorative SVG (background only) */}
      <img
        src={SkyBlueBg}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
        "
      />

      {/* Content surface */}
      <div
        className="
          relative
          z-10
          max-w-[1240px]
          mx-auto
          px-[24px]
          py-[64px]

          flex
          flex-col
          items-center
          text-center

          bg-white
          rounded-[24px]
          isolation-isolate
        "
      >
        <h3 className="font-manrope font-bold text-[36px] text-[#4B371C]">
          Explore More With Inflecto
        </h3>

        <p className="mt-[6px] max-w-[640px] text-[16px] text-[#6B6B6B] leading-[150%]">
          Discover our full range of solutions, insights, and resources on our
          official website.
        </p>

        <div className="mt-[16px]">
          <VisitOurWebsiteButton />
        </div>
      </div>
    </section>
  );
}
