import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <li>
        <NavLink className="sidebar_link" to="/DashboardPage">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar_link" to="/SalaryPage">
          Salary
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar_link" to="/StationaryPage">
          Stationary
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar_link" to="/SellPage">
          Sell
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar_link" to="/OfficeRentPage">
          Office Rent
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar_link" to="/SummaryPage">
          Summary
        </NavLink>
      </li>
    </div>
  );
}

export default SideBar;
