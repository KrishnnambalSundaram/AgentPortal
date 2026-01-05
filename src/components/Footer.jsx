import Logo from "./Logo";

/* Social Icon Wrapper — Figma accurate */
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-[36.75px]
        h-[35px]
        rounded-full
        border
        border-[#2F2F2F]
        flex
        items-center
        justify-center
      "
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* OUTER WRAPPER */}
      <div className="max-w-[1240px] mx-auto">
        
        {/* FOOTER BAR */}
        <div
          className="
            h-[72px]
            w-full
            flex
            items-center
            justify-between
            px-[24px]
          "
        >
          {/* LEFT — LOGO */}
          <Logo />

          {/* CENTER — TEXT (WHITE) */}
          <div className="text-center">
            <p
              className="
                font-outfit
                font-normal
                text-[14px]
                leading-[24px]
                text-white
              "
            >
              INFLECTO TECHNOLOGIES
            </p>

            <p
              className="
                font-outfit
                font-normal
                text-[14px]
                leading-[24px]
                text-white
              "
            >
              Ernst & Wales Business Center, Fronds Building, M floor (Above QMotors)
              <br />
              Sheikh Zayed Road, Close to Equity metro, Industrial Area 3, Dubai, UAE
            </p>
          </div>

          {/* RIGHT — SOCIAL ICONS */}
          <div className="flex items-center gap-[12px]">
            <SocialIcon
              href="https://www.linkedin.com/company/inflecto"
              label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[16px] h-[16px] fill-white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8Z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/inflecto"
              label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[16px] h-[16px] fill-white"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://twitter.com/inflecto"
              label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[16px] h-[16px] fill-white"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.03v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
