import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/landingPage/Index";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/user-dashboard/Dashboard";
import BuyData from "../pages/user-dashboard/Buy-Data";
import Profile from "../pages/user-dashboard/Profile";
import Username from "../pages/user-dashboard/Username";
import TransactionPin from "../pages/user-dashboard/TransactionPin";
import Email from "../pages/user-dashboard/Email";
import Password from "../pages/user-dashboard/Password";
import Rate from "../pages/user-dashboard/Rate";
import Card from "../pages/user-dashboard/Cards";
import Services from "../pages/user-dashboard/Services";
import Transaction from "../pages/user-dashboard/Transactions";
import TransactionDetails from "../pages/user-dashboard/TransactionDetail";
const MyRouter = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/app" element={<Dashboard />} />
        <Route path="/dashboard/buydata" element={<BuyData />} />
        <Route path="/dashboard/user/account" element={<Profile />} />
        <Route
          path="/dashboard/user/Tansaction-pin"
          element={<TransactionPin />}
        />
        <Route path="/dashboard/user/change-username" element={<Username />} />
        <Route path="/dashboard/user/update-email" element={<Email />} />
        <Route path="/dashboard/user/update-password" element={<Password />} />
        <Route path="/dashboard/user/rate" element={<Rate />} />
        <Route path="/dashboard/user/cards" element={<Card />} />
        <Route path="/dashboard/user/services" element={<Services />} />
        <Route path="/dashboard/user/transactions" element={<Transaction />} />
        <Route
          path="/dashboard/user/transactions-detail"
          element={<TransactionDetails />}
        />
      </Routes>
    </Router>
  );
};
export default MyRouter;
