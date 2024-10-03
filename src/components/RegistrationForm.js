import React, { useRef } from "react";
import { NavLink,useNavigate } from "react-router-dom";
// import image1 from "../assets/image/image1.png";
import Create from "../APIServices/RegistrationAPI";
import Swal from 'sweetalert2'

function RegistrationForm() {
  let Name,Email,Password = useRef();
  let navigate = useNavigate();

  const saveData = () => {
    let Add_Name = Name.value;
    let Add_Email = Email.value;
    let Add_Password = Password.value;

    if (Add_Name.length === 0) {
      alert("Name required");
    } else if (Add_Email.length === 0) {
      alert("Email required");
    } else if (Add_Password.length === 0) {
      alert("Password required");
    } else {
      Create(Add_Name, Add_Email, Add_Password).then((result) => {
        if (result === true) {
          Swal.fire({
            icon: 'success',
            title: 'Registration success',
          })
          Name.value='';
          Email.value='';
          Password.value='';
          navigate('/')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
          })
        }
      });
    }
  };
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center  ">
        {/* <div className="col-md-6 col-12 reg_img ">
          <img src={image1} alt="..." />
        </div> */}
        <div className="col-md-5 col-12 reg_form">
          <div className="card p-5 ">
            <p className="fs-4 text-secondary fw-bold">Sign Up</p>
            <div>
              <input
                className="w-100 py-2 form-control mb-4 "
                ref={(input) => Name = input}
                type="text"
                placeholder="Name"
              />
              <input
                className="w-100 py-2 form-control mb-4"
                ref={(input) => Email = input}
                type="email"
                placeholder="Email"
              />
              <input
                className="w-100 py-2 form-control mb-4"
                ref={(input) => Password = input}
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={saveData}
              type="submit"
              className="w-100 py-2  btn btn-success"
            >
              Registration
            </button>
            <span className="text-center mt-3">
              Already have an account ?
              <NavLink className="text-success ms-2" to="/">
                Login
              </NavLink>
            
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
