import { Link } from "react-router-dom";

function Header()
{
    return(
        <div className="header">
        <Link to="./"><button className="link-btn">Home</button></Link>
        <Link to="./PhoneList"><button className="link-btn">Phone List</button></Link>
        <Link to="./PhoneList/add"><button className="link-btn">Add New Phone</button></Link>
        </div>
    );
    
}
export default Header;