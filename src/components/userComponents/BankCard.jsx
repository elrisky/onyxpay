import {Trash2 } from "react-feather";
import HeaderNavigation from "./HeaderNavigation";
const BankCard = ({ cardDetails }) => {
  return (
    <>
      <HeaderNavigation title="Bank Cards and Accounts" />
      <div className="container" style={{ marginTop: "100px" }}>
        {cardDetails.map((item, index) => (
          <div className="card my-3" key={index}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="card-img d-flex align-items-center">
                <div
                  className=" me-3 d-flex justify-content-center align-items-center rounded-circle overflow-hidden"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={item.image}
                    className="img-fluid"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="">
                  <h6>{item.bankName}</h6>
                  <p className="mb-0 text-muted">{item.cardNumber}</p>
                </div>
              </div>
              <div className="delete">
                <Trash2 />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BankCard;
