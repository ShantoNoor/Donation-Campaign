import logo from "/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Donation",
      to: "donation/",
    },
    {
      text: "Statistics",
      to: "statistics/",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
      <div className="flex items-center gap-5">
        <img className="w-[72px] h-[72px]" src={logo} alt="logo" />
        <div>
          <h1 className="text-red1 font-bold text-4xl">Donation</h1>
          <h2 className="text-black117 font-medium tracking-[9.54px] text-lg">Campaign</h2>
        </div>
      </div>
      <div className="flex gap-12">
        {links.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              to={link.to}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-red1 underline font-bold"
                  : ""
              }
            >
              {link.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
