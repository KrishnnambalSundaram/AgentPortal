import Logo from "./Logo";
import VisitOurWebsiteButton from "./VisitOurWebsiteButton";

export default function Header() {
  return (
    <header className="absolute top-[24px] left-0 w-full z-30">
      <div
        className="max-w-[1240px] mx-auto h-[80px] px-[24px] flex items-center justify-between rounded-[20px]"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.18),
              rgba(255,255,255,0.32)
            )
          `,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.9)",
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.35),
            0 10px 28px rgba(0,0,0,0.10)
          `,
        }}
      >
        <Logo />
        <VisitOurWebsiteButton />
      </div>
    </header>
  );
}























































































