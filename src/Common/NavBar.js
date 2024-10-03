import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//
function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("my-token");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info  align-items-center py-3 ps-2">
        <div className="container d-flex justify-content-space-between align-items-center">
          <div>
            <NavLink className="navbar-brand fw-bold fs-5 text-white" to="#">
              <span>ABC ENTERPRISE</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <div className=" d-flex align-items-center">
                <Button className="logout_btn  " onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
