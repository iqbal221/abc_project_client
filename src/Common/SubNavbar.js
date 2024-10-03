import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

function SubNavbar(props) {
  return (
    <div className="bg-secondary mt-4 mb-4  p-1 d-flex justify-content-between rounded-top">
      <form className="d-flex">
        <button className="btn btn-success fs-5" type="submit">
          Search
        </button>
        <input className="ps-2" icon="search" onChange={props.onChange} />
      </form>
      
      <NavLink to="/CreatePage">
        <Button
          // onClick={handleShow}
          className="btn btn-success fs-5 "
          // data-bs-toggle="modal"
        >
          <BsFillPlusCircleFill className="me-1 pb-1 fs-4" />
          Add Data
        </Button>
      </NavLink>
    </div>
  );
}

export default SubNavbar;
