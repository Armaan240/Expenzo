
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  const location = useLocation();
const navigate=useNavigate();
    function handleReset(){
        localStorage.clear();
        navigate("/");
    }
  return (
    <nav className="navbar">
      <h1 className="logo">Expenzo</h1>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>📊 Dashboard</Link>
        </li>
        <li className={location.pathname === "/transaction" ? "active" : ""}>
          <Link to={"/transaction"}>📄 Transaction</Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
          <Link to={"/reports"}>⏳ Reports</Link>
        </li>
        <li>
        <div className="reset-btn" onClick={handleReset}>🔄 Reset</div>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
