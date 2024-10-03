import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import image2 from "../assets/image/image2.png";
import Create from "../APIServices/LoginAPI";
import Swal from 'sweetalert2'

function LoginForm() {
  let Email,
    Password = useRef();
  let navigate = useNavigate();

  const saveData = () => {
    let Add_Email = Email.value;
    let Add_Password = Password.value;


    if(Add_Email.length === 0) {
      alert("Email required");
    } else if (Add_Password.length === 0) {
      alert("Password required");
    } else {
      Create(Add_Email, Add_Password).then((result) => {
        console.log(Add_Email, Add_Password)
       
        if (result === true) {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
          })
          Email.value='';
          Password.value='';
          navigate("/DashboardPage");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login failed',
          })
        }
      });
    }
  };
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-cente">
        <div className="col-md-5 col-12 log_form ">
          <div className="card p-5 ">
            <p className="fs-4 text-secondary fw-bold">Sign In</p>
            <div>
              
              <input
                className="w-100 py-2 form-control mb-4 "
                ref={(input) => Email = input}
                type="email"
                placeholder="Email"
              />
              <input
                className="w-100 py-2 form-control mb-4 "
                ref={(input) => Password = input}
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={saveData}
              type="submit"
              className="w-100 py-2  btn btn-warning"
            >
              Login
            </button>
            <span className="text-center mt-3">
              Haven't any account?
              <NavLink className="text-success ms-2" to="/registration">
                Registration
              </NavLink>
             
            </span>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default LoginForm;
