import { Home, Star, User, CreditCard, MoreHorizontal } from "react-feather";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/dashboard/app" className="mobile-item">
        <div className="icon-bg rounded">
          <Home className="nav-icon" />
        </div>
        <span className="text-muted">Home</span>
      </Link>
      <Link to="#rewards" className="mobile-item">
        <div className="icon-bg rounded">
          <Star className="nav-icon" />
        </div>
        <span className="text-muted">Rewards</span>
      </Link>

      <Link to="/dashboard/user/cards" className="mobile-item">
        <div className="icon-bg rounded">
          <CreditCard className="nav-icon" />
        </div>
        <span className="text-muted">Cards</span>
      </Link>
      <Link to="/dashboard/user/account" className="mobile-item">
        <div className="icon-bg rounded">
          <MoreHorizontal className="nav-icon" />
        </div>
        <span className="text-muted">Other</span>
      </Link>
    </div>
  );
};

export default Menu;
