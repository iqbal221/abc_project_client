import React, { useRef } from "react";
// import { ErrorToast, isEmpty, SuccessToast } from '../../helpers/ValidationHelper';
import Create from "../APIServices/CreateAPI";
// import FullScreenLoader from "../Helper/FullScreenLoader";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import SubNavbar from "../Common/SubNavbar";
import SideBar from "../Common/SideBar";
import Swal from "sweetalert2";

// import SubNavbar from "../Common/SubNavbar";
// import Calendar from "react-calendar";

function CreateData() {
  let Name,
    Head,
    Type,
    Amount,
    Date,
    SL = useRef();
  const navigate = useNavigate();

  const saveData = () => {
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
      Create(Add_Name, Add_Head, Add_Type, Add_Amount, Add_Date, Add_SL).then(
        (result) => {
          if (result === true) {
            Swal.fire("Good job!", "Data save success", "success");
            Name.value = "";
            Head.value = "";
            Type.value = "";
            Amount.value = "";
            Date.value = "";
            SL.value = "";
            navigate("/DashboardPage");
          } else {
            Swal.fire("Request failed", "error");
          }
        }
      );
    }
  };

  return (
    <div className="bg-white rounded-top">
      <div className="row">
        <div className="col-md-2">
          <ol className="sidebar navbar-nav">
            <SideBar />
          </ol>
        </div>
        <div className="col-md-10">
          <SubNavbar />
          <div className="row create_form m-auto card p-4 mt-3">
            <div className="my-2 d-flex justify-content-center align-items-center">
              <div className="w-100 me-1">
                <input
                  ref={(input) => (SL = input)}
                  type="number"
                  className="form-control"
                  placeholder="SL No"
                />
              </div>
              <div className="w-100 ms-1">
                <input
                  ref={(input) => (Date = input)}
                  type="date"
                  className="form-control"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>
            <div className="my-2">
              <input
                ref={(input) => (Name = input)}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="my-2 w-100 me-1">
                <Form.Group controlId="formBasicSelect">
                  {/* <Form.Label>Head</Form.Label> */}
                  <Form.Select
                    as="select"
                    ref={(input) => (Head = input)}
                    type="text"
                    className="form-control"
                  >
                    <option value="Select">Select Head</option>
                    <option value="Salary">Salary</option>
                    <option value="Office Rent">Office Rent</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Sell">Sell</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="my-2 w-100 ms-1">
                <Form.Group controlId="formBasicSelect">
                  {/* <Form.Label>Type</Form.Label> */}
                  <Form.Select
                    as="select"
                    ref={(input) => (Type = input)}
                    type="text"
                    className="form-control"
                  >
                    <option value="Select">Select Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="my-2">
              {/* <label>Amount</label> */}
              <input
                ref={(input) => (Amount = input)}
                type="number"
                className="form-control"
                groupSeparator={true}
                placeholder="Amount"
              />
            </div>

            <div className="mt-3 mb-2">
              <button onClick={saveData} className="btn btn-primary w-100">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateData;
