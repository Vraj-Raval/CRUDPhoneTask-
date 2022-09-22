import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employee() {
  const [employee, setemployee] = useState([]);
  useEffect(() => {
    fetch("https://6320bf4782f8687273a6ec94.mockapi.io/Phone")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setemployee(res);
      });
  }, []);

  const formatedemployee = employee.map((fac) => {
    return (
      
      <div className="List">
        
      <table  align="center">
        <tr>
        
            <td>
                
                <Link to={"../PhoneList/" + fac.id}>
                 
                 <button className="list-btn">{fac.PhoneName}</button>
            </Link>
               
             
            </td>
        </tr>
      </table>
        
      </div>
    );
  });

  return formatedemployee;
}

export default Employee;
