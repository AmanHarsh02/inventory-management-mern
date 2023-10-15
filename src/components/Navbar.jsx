import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const gradientColor =
  "bg-gradient-to-r from-blue-600 to-violet-500 text-transparent bg-clip-text";

const gradientColorOnHover =
  "hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-500 hover:text-transparent hover:bg-clip-text";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="px-4 py-3 flex justify-between flex-wrap shadow-md rounded-b-md">
      <h1 className={`${gradientColor}`}>
        <NavLink to="/">Inventory Management</NavLink>
      </h1>

      <ul className="flex items-center gap-2 md:gap-4 flex-wrap font-semibold">
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/">Items</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/reports">Reports</NavLink>
        </li>
      </ul>
    </nav>
  );
};
