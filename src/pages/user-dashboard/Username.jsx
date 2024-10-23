import { HelpCircle } from "react-feather";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";

const Username = () => {
    return (
      <>
        <div className="container">
          <HeaderNavigation title="Username" />
          <div className="card bg-transparent" style={{marginTop:"100px"}}>
            <div className="card-header">
                <HelpCircle /> <span className="text-muted">your friends can directly use your username to buy airtime for you or send you some money to your wallet</span>
            </div>
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control bg-transparent text-white my-4 stroke"
                  id="floatingPhone"
                  placeholder="Phone Number"
                />
                <label htmlFor="floatingPhone" className="text-muted">
                  Username
                </label>
              </div>
              <button className="btn theme-btn p-3">Create Username</button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Username;