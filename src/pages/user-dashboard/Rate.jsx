import HeaderNavigation from "../../components/userComponents/HeaderNavigation";

const Rate = () => {
    return (
      <>
        <div className="container">
          <HeaderNavigation title="Rating" />
          <div className="card my-3 mt-5">
            <div className="card-header">
              <h2>Rate Our App</h2>
            </div>
            <div className="card-body">
              <p>
                Dear user,thanks for using onyxpay and beign part of our success
                story. To help us improve on our services moving forward, please
                spare a minute of your time to take part in this survery
              </p>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-header">
              <p>
                Please rate our app <span className="text-danger">*</span>
              </p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <input type="checkbox" name="" id="" />
                  1.very poor
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                  2.poor
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                  3.fair/average
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                  4.good
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                  5.very good
                </li>
              </ul>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-header">
              <p>
                Please spare extra seconds to offer any suggestion on how we can
                improve better
              </p>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                placeholder="your answer"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="card my-3">
            <div className="card-header">
              <p>
                What do you think of the new virsion of the app? Any input on
                what we could work on for better user experience
              </p>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                placeholder="your answer"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Rate;