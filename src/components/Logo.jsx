import { Link } from "react-router-dom";
import logo from "../assets/inflecto-logo.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Inflecto Technologies"
      className="w-[196px] h-[66px] flex items-center cursor-pointer"
    >
      <img
        src={logo}
        alt="Inflecto Technologies"
        className="w-full h-full object-contain"
        draggable="false"
      />
    </Link>
  );
}




























// import logo from "../assets/inflecto-logo.svg";

// export default function Logo() {
//   return (
//     <div
//       className="w-[196px] h-[66px] flex items-center"
//       aria-label="Inflecto Technologies"
//     >
//       <img
//         src={logo}
//         alt="Inflecto Technologies"
//         className="w-full h-full object-contain"
//       />
//     </div>
//   );
// }
