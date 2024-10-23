import { Link } from "react-router-dom";
import bell from "../../assets/user-asset/images/icons/bell-icon.svg"
import Balance from "./Balance";

const Header =()=>{
    return (
      <>
        <div className="header">
          <nav className="navbar">
            <div className="navbar-container">
              <a className="logo  text-decoration-none" href="/">
                <p className="logo-text">
                  Onyx<span className="logo-highlight">pay</span>.
                </p>
              </a>
              <div className="navbar-icons">
                <a className="icon-link" href="/notifications">
                  <img src={bell} alt="Notifications" className="icon" />
                </a>
                <Link
                  to="/dashboard/user/account"
                  className="profile-link"
                  href="/profile"
                >
                  <img src="" alt="Profile" className="profile-img" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <Balance />
      </>
    );
}
export default Header