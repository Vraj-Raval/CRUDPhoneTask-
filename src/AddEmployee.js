import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEmployee() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://6320bf4782f8687273a6ec94.mockapi.io/Phone" +"/"+ params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <div className="form">
    
        <div>-</div>
      <table cellSpacing={20} align="center" className="table1">
        <tr>
          <td>Phone Name:</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhoneName}
              onChange={(e) => {
                setData({ ...data, PhoneName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Phone Model</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhoneModel}
              onChange={(e) => {
                setData({ ...data, PhoneModel: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Phone Image</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhoneImg}
              onChange={(e) => {
                setData({ ...data, PhoneImg: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Phone Decription</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhoneDecription}
              onChange={(e) => {
                setData({ ...data, PhoneDecription: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Phone Price</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhonePrice}
              onChange={(e) => {
                setData({ ...data, PhonePrice: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Phone Maker</td>
          <td>:</td>
          <td>
            <input size={30}
              value={data.PhoneMaker}
              onChange={(e) => {
                setData({ ...data, PhoneMaker: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <button className="btn-add-edit"
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://6320bf4782f8687273a6ec94.mockapi.io/Phone" +"/"+
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/PhoneList");
                  });
                } else {
                  fetch(
                    "https://6320bf4782f8687273a6ec94.mockapi.io/Phone",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/PhoneList");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add  "}
              Phone
            </button>
          </td>
        </tr>
      </table>
      
    </div>
  );
}
