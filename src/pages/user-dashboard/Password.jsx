import { HelpCircle } from "react-feather";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";

const Password = () => {
  return (
    <>
      <div className="container">
        <HeaderNavigation title="Password" />
        <div className="card bg-transparent" style={{ marginTop: "100px" }}>
          <div className="card-header">
            <HelpCircle />{" "}
            <span className="text-muted">
              We will send you an activation link,payment notiifications and
              contact you with the email you provided
            </span>
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
                Old Password
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control bg-transparent text-white my-4 stroke"
                id="floatingPhone"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingPhone" className="text-muted">
                New Password
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control bg-transparent text-white my-4 stroke"
                id="floatingPhone"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingPhone" className="text-muted">
                Confirm Password
              </label>
            </div>
            <button className="btn theme-btn p-3">Update Password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
