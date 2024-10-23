import { ArrowUp, ArrowUpRight, CreditCard, Download, Share, Share2 } from "react-feather";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";
import ListViewTitle from "../../components/userComponents/ListViewTitle";
import Menu from "../../components/userComponents/Menu";

const TransactionDetails = () => {
    return (
      <>
        <HeaderNavigation title="Transaction Details" />
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="card bg-gray-200 rounded-3xl">
            <div className="card-body p-4 d-flex justify-content-between align-items-center">
              <div className="">
                <p
                  className="bg-danger p-2 rounded text-white "
                  style={{ width: "max-content" }}
                >
                  <ArrowUp /> Debit
                </p>
                <h1 className="text-white">₦2,100.00</h1>
                <p className="text-muted">Lorem ipsum dolor sit </p>
              </div>
              <div className="">
                <p className="bg-danger p-2 rounded text-white">Debit</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="card my-3 bg-gray-200">
                <div className="card-body text-white d-flex pb-1 justify-content-center align-items-center flex-column">
                  <CreditCard className="text-center mb-3" />
                  <span className="d-block">Refund</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card my-3 bg-gray-200">
                <div className="card-body text-white d-flex pb-1 justify-content-center align-items-center flex-column">
                  <Share2 className="text-center mb-3" />
                  <span className="d-block">Share</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card my-3 bg-gray-200">
                <div className="card-body text-white d-flex pb-1 justify-content-center align-items-center flex-column">
                  <Download className="text-center mb-3" />
                  <span className="d-block">Download</span>
                </div>
              </div>
            </div>
          </div>
          <ListViewTitle title="Other Details" />
          <div className="card bg-gray-200">
            <div className="card-body text-white">
              <ul className="list-unstyled">
                <li className="border-bottom p-4 mb-3">
                  <span>Masked PAN</span>
                  <span className="d-block text-muted pt-2">
                    383903489****3276
                  </span>
                </li>
                <li className="border-bottom p-4 mb-3">
                  <span>Masked PAN</span>
                  <span className="d-block text-muted pt-2">
                    383903489****3276
                  </span>
                </li>
                <li className="border-bottom p-4 mb-3">
                  <span>Masked PAN</span>
                  <span className="d-block text-muted pt-2">
                    383903489****3276
                  </span>
                </li>
                <li className="border-bottom p-4 mb-3">
                  <span>Masked PAN</span>
                  <span className="d-block text-muted pt-2">
                    383903489****3276
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Menu />
      </>
    );
}
 
export default TransactionDetails;