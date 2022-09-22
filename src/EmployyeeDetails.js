import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployyeeDetails() {
  let params = useParams();
  const navigate = useNavigate();

  const [employee, setemployee] = useState({});

  useEffect(() => {
    fetch(
      "https://6320bf4782f8687273a6ec94.mockapi.io/Phone"+"/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setemployee(res);
      });
  }, []);

  return (
    <div className="back-form">
    <div className="emp-list-pr">
      <div>-</div>
      <table border={0} align="center" cellspacing="20px" className="table">
         <tr >
            <td className="emp-av" rowspan={6}>
              <img  width={300} src={employee.PhoneImg} alt="as"/>
            </td>
            <td >Name:{employee.PhoneName}</td>
         </tr>
         <tr>
            <td>Model:{employee.PhoneModel}</td>
         </tr>
         <tr>
            <td className="table-dec">
            Decription:{employee.PhoneDecription}
            </td>
         </tr>
        
         <tr>
            <td>
              Price:{employee.PhonePrice}
            </td>
         </tr>
         <tr>
            <td>
              Maker:{employee.PhoneMaker}
            </td>
         </tr>
         <tr>
        
            <td colSpan={2}>
            <button className="btn-delete"
              onClick={() => {
                fetch(
                  "https://6320bf4782f8687273a6ec94.mockapi.io/Phone" +"/"+
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/PhoneList");
                });
              }}
            >
              Delete
            </button>
            <button className="btn-edit"
              onClick={() => {
                navigate("/PhoneList/edit/" + params.id);
              }}
            >
              Edit
            </button>
            </td>
         </tr>
         
      </table>
    </div>
    </div>
  );
}
export default EmployyeeDetails;
