import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex shadow-[0_-2px_10px_0_rgba(0,0,0,0.25)] justify-between items-center px-[2em] py-[0.5em]">
      <NavLink to="/" className="text-[1.2em]">
        Mini <span className="font-black uppercase">Blog</span>
      </NavLink>
      <ul className="flex ">
        <li className="mr-[1em]">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-[0.6em] py-[0.4em] bg-black text-white"
                : "px-[0.6em] py-[0.4em]"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-[0.6em] py-[0.4em] bg-black text-white"
                : "px-[0.6em] py-[0.4em]"
            }
            to="/sobre"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-[0.6em] py-[0.4em] bg-black text-white"
                : "px-[0.6em] py-[0.4em]"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-[0.6em] py-[0.4em] bg-black text-white"
                : "px-[0.6em] py-[0.4em]"
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
