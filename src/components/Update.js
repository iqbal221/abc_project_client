import React, { useRef, useEffect } from "react";
// import { ErrorToast, isEmpty, SuccessToast } from '../../helpers/ValidationHelper';
import ReadByUserID from "../APIServices/ReadByInfoAPI";
import Update from "../APIServices/UpdateAPI";
// import FullScreenLoader from "../Helper/FullScreenLoader";
import { useNavigate,NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import SubNavbar from "../Common/SubNavbar";
import SideBar from "../Common/SideBar";
import Swal from 'sweetalert2'

function UpdateData(props) {
  let Name,
    Head,
    Type,
    Amount,
    Date,
    SL = useRef();
  const navigate = useNavigate();

  const UpdateData = () => {
    let Add_Name = Name.value;
    let Add_Head = Head.value;
    let Add_Type = Type.value;
    let Add_Amount = Amount.value;
    let Add_Date = Date.value;
    let Add_SL = SL.value;

    if (Add_SL.length === 0) {
      Swal.fire("Oops...", "SL is required!", "error");
    } else if (Add_Date.length === 0) {
      Swal.fire("Oops...", "Date is required!", "error");
    } else if (Add_Name.length === 0) {
      Swal.fire("Oops...", "Name is required!", "error");
    } else if (Add_Head.length === 0) {
      Swal.fire("Oops...", "Head is required!", "error");
    } else if (Add_Type.length === 0) {
      Swal.fire("Oops...", "Type is required!", "error");
    } else if (Add_Amount.length === 0) {
      Swal.fire("Oops...", "Amount is required!", "error");
    } else {
      Update(
        props.UserID,
        Add_Name,
        Add_Head,
        Add_Type,
        Add_Amount,
        Add_Date,
        Add_SL
      ).then((result) => {
        if (result === true) {
          Swal.fire(
            'Good job!',
            'Data update success',
            'success'
          )
          Name.value = "";
          Head.value = "";
          Type.value = "";
          Amount.value = "";
          Date.value = "";
          SL.value = "";
          navigate("/DashboardPage");
        } else {
          Swal.fire(
            'Request failed',
            'error'
          )
        }
      });
    }
  };

  useEffect(() => {
    ReadByUserID(props.UserID).then((result) => {
      console.log(result)
      Name.value = result[0]["Name"];
      Head.value = result[0]["Head"];
      Type.value = result[0]["Type"];
      Amount.value = result[0]["Amount"];
      Date.value = result[0]["Date"];
      SL.value = result[0]["SL"];
    }, []);
  });

  return (
    <div className="bg-white rounded-top">
      <div className="row">
        <div className="col-md-2">
          <ol className="sidebar navbar-nav">
            <SideBar/>
          </ol>
        </div>
        <div className="col-md-10">
          <SubNavbar/>
          <div className="row create_form m-auto card ">
            <div className="my-2 d-flex justify-content-center align-items-center">
              <div className="my-1 w-100 me-1">
                <label>SL No</label>
                <input
                  ref={(input) => (SL = input)}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="my-1 w-100 ms-1">
                <label>Date</label>
                <input
                  ref={(input) => (Date = input)}
                  type="text"
                  className="form-control"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
            <div className="my-1">
              <label>Name</label>
              <input
                ref={(input) => (Name = input)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div className="my-1 w-100 me-1">
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Head</Form.Label>
                  <Form.Control
                    as="select"
                    ref={(input) => (Head = input)}
                    type="text"
                    className="form-control"
                  >
                    <option value="Select">Select</option>
                    <option value="Salary">Salary</option>
                    <option value="Office Rent">Office Rent</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Sell">Sell</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="my-1 w-100 ms-1">
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    as="select"
                    ref={(input) => (Type = input)}
                    type="text"
                    className="form-control"
                  >
                    <option value="Select">Select</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>

            <div className="my-1">
              <label>Amount</label>
              <input
                ref={(input) => (Amount = input)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="my-2">
              <button onClick={UpdateData} className="btn btn-primary w-100">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateData;
