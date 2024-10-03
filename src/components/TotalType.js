import React, { useState, useEffect } from "react";
import Read from "../APIServices/ReadTotalTypeAPI";
// import FullScreenLoader from "../Helper/FullScreenLoader";
import SubNavbar from "../Common/SubNavbar";
import SideBar from "../Common/SideBar";
import { NavLink } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import PieChartType from "./PieChart_Type";
// import Charts from "./Charts";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Summary() {
  // let Name,
  //   Head,
  //   Type,
  //   Amount = useRef();

  // const [show, setShow] = useState(false);
  const [DataList, SetDataList] = useState([]);

  useEffect(() => {
    Read().then((result) => {
      SetDataList(result);
    });
  }, []);

  // const handleShow = () => {
  //   setShow(true);
  // };

  // const handleClose = () => {
  //   setShow(false);
  // };



  return (
    <div className="row">
      <div className="col-md-2">
        <ol className="sidebar navbar-nav">
          <SideBar />
        </ol>
      </div>
      <div className="col-md-10">
        <div className="bg-secondary mt-4 mb-4  p-1 d-flex justify-content-between rounded-top">
          <div>
            <NavLink
              className="Total_type mx-5 text-warning fs-5 pt-4 fw-bold"
              to="/TotalTypePage"
            >
              Total Type
            </NavLink>

            <NavLink
              className="Total_summary text-warning fs-5 fw-bold"
              to="/SummaryPage" 
            >
              Summary
            </NavLink>
          </div>

          <NavLink to="/CreatePage">
            <Button className="btn btn-success fs-5 ">
              <BsFillPlusCircleFill className="me-1 pb-1 fs-4" />
              Add Data
            </Button>
          </NavLink>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 d-flex justify-content-center">
           
            <PieChartType/>
            
          </div>

          <div className="col-lg-6 mt-4">
            {DataList?.map((item, index) => {
              return (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="card summary_type p-2 me-4 mb-3 text-white bg-primary fs-5">
                    {item._id}
                  </div>
                  <div className="card summary_amount p-2 me-4 mb-3 text-black bg-primary fs-5">
                    = {item.total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
