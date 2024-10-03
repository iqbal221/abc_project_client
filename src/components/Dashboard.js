import React, { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import Read from "../APIServices/ReadAPI";
import { Table, Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import SubNavbar from "../Common/SubNavbar";
import Pagination from "../Common/Pagination";
import SideBar from "../Common/SideBar";
import Swal from 'sweetalert2'




function Dashboard() {
  const navigate = useNavigate();
  
  const [DataList, SetDataList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [DataListPerPage] = useState(6);
  
 
  useEffect(() => {
    Read().then((result) => {
      SetDataList(result);
    })
  }, []);


  const indexOfLastDataList = currentPage * DataListPerPage;
  const indexOfFirstDataList = indexOfLastDataList - DataListPerPage;
  const currentDataList = DataList?.slice(
    indexOfFirstDataList,
    indexOfLastDataList
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchItems = (e) => {
    setSearchInput(e);
    if (searchInput !== "") {
      const filteredData = DataList?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(DataList);
    }
  };


  const DeleteItem = (id) => {
    Swal.fire({
      title: "Do you want to delete confirm?",
      showCancelButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
      }
      fetch(`http://localhost:5000/api/v1/DeleteInfo/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("my-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire(
                  'Deleted!',
                  'Data has been deleted.',
                  'success'
                )
          }
          const remainingData = DataList?.filter(
            (Data) => Data._id !== id
          );
          SetDataList(remainingData);
        });
    });
  }
    
  const UpdateItem = (UserID) => {
    navigate("/UpdatePage/" + UserID);
  };

  return (
    <div className="bg-white rounded-top justify-content-center">
      <div className="row">
        <div className="col-md-2">
          <ol className="sidebar navbar-nav">
            <SideBar/>
          </ol>
        </div>
        <div className="col-md-10">
          <SubNavbar onChange={(e) => searchItems(e.target.value)} />
          
          <Table  striped bordered hover className="mt-3 text-center mx-auto  ">
            <thead>
              <tr className="text-center">
                <th scope="col">SL No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Head</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchInput?.length > 1
                ? filteredResults?.map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{item.SL}</td>
                          <td>{item.Date}</td>
                          <td>{item.Name}</td>
                          <td>{item.Head}</td>
                          <td>{item.Type}</td>
                          <td>{item.Amount}</td>
                          <td>
                            <Button
                              className="btn btn-primary me-2"
                              onClick={UpdateItem.bind(this, item.UserID)}
                            >
                              <FiEdit />
                            </Button>
                            <Button
                              className="btn btn-danger"
                              onClick={()=>DeleteItem(item._id)}
                            >
                              <AiOutlineDelete />
                            </Button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : currentDataList?.map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{item.SL}</td>
                          <td>{item.Date}</td>
                          <td>{item.Name}</td>
                          <td>{item.Head}</td>
                          <td>{item.Type}</td>
                          <td>{item.Amount}</td>
                          <td>
                            <Button
                              className="btn btn-primary me-2"
                              onClick={UpdateItem.bind(this, item.UserID)}
                            >
                              <FiEdit />
                            </Button>
                            <Button
                              className="btn btn-danger"
                              onClick={()=>DeleteItem(item._id)}
                            >
                              <AiOutlineDelete />
                            </Button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </Table>
          <Pagination
            DataListPerPage={DataListPerPage}
            totalDataList={DataList?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
