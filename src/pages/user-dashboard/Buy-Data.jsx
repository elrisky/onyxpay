import { useState } from "react";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";
import Info from "../../components/userComponents/Info";
import Menu from "../../components/userComponents/Menu";
import mtn from "../../assets/user-asset/images/icons/mtn-icon.svg";
import glo from "../../assets/user-asset/images/icons/glo-icon.svg";
import airtel from "../../assets/user-asset/images/icons/airtel-icon.svg";
import mobile from "../../assets/user-asset/images/icons/mobile-icon.svg";
import { HelpCircle } from "react-feather";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Toolpit from "../../components/userComponents/Toolpit";


// Sample network data with names and images
const networks = [
  { id: 1, name: "MTN", image: mtn },
  { id: 2, name: "GLO", image: glo },
  { id: 3, name: "Airtel", image: airtel },
  { id: 4, name: "9-Mobile", image: mobile },
];

const contacts = [
  { id: 1, name: "Contact 1" },
  { id: 2, name: "Contact 2" },
  { id: 3, name: "Contact 3" },
];

const CustomSelect = ({ options, selected, setSelected, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="form-floating mb-3">
      <div className="custom-select" onClick={toggleDropdown}>
        <div className="selected p-3 bg-transparent text-muted stroke">
          {selected ? (
            <>
              <img
                src={selected.image}
                alt={selected.name}
                width="20"
                height="20"
              />
              {selected.name}
            </>
          ) : (
            label
          )}
        </div>
        {isOpen && (
          <div className="options bg-gray-200">
            {options.map((option) => (
              <div
                key={option.id}
                className="option"
                onClick={() => handleSelect(option)}
              >
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.name}
                    width="40"
                    height="40"
                    className="me-3"
                  />
                )}
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const BuyData = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  const style = {
    marginTop: "100px",
  };
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  return (
    <>
      <HeaderNavigation title="Buy-Data" />
      <div className="container" style={{ marginBottom: "100px" }}>
        <Info
          info="To buy data, select the network and data plan then enter the recipient phone number to proceed."
          className="text-white"
          style={style}
        />
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="col-12">
              <div className="card w-full bg-gray-200 my-3 p-2">
                <div className="card-body">
                  <form id="airtimeForm">
                    <input
                      type="hidden"
                      name="_token"
                      value="7ubQmbWUtIVOzy3qooRlZryKCiwJeuBdGrpqJwgN"
                      autoComplete="off"
                    />

                    <CustomSelect
                      options={networks}
                      selected={selectedNetwork}
                      setSelected={setSelectedNetwork}
                      label="Select Network"
                    />

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control bg-transparent text-white my-4 stroke"
                        id="floatingPhone"
                        placeholder="Phone Number"
                      />
                      <label htmlFor="floatingPhone" className="text-muted">
                        Phone
                      </label>
                    </div>

                    <CustomSelect
                      options={contacts}
                      selected={selectedContact}
                      setSelected={setSelectedContact}
                      label="Select from Contact"
                    />

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control bg-transparent text-white my-4 stroke"
                        id="floatingAmount"
                        placeholder="Amount"
                      />
                      <label htmlFor="floatingAmount" className="text-muted">
                        Amount
                      </label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control bg-transparent text-white stroke"
                        id="discountAmount"
                        placeholder="Discount"
                        readOnly
                        value="0.00"
                      />
                      <label htmlFor="discountAmount" className="text-muted">
                        Discount
                      </label>
                    </div>

                    <div className="notification pb-0 d-flex justify-content-between">
                      <h5 className="fw-normal fs-6 text-muted position-relative">
                        By-Pass
                        <HelpCircle
                          className="ms-2"
                          onClick={toggleTooltip}
                          style={{ width: "15px", cursor: "pointer" }}
                        />
                        <Toolpit
                          text="More information about By-Pass"
                          visible={tooltipVisible}
                          onClose={() => setTooltipVisible(false)}
                        />
                      </h5>
                      <div className="form-check">
                        <label className="switch">
                          <input type="checkbox" hidden />
                          <div className="switch__wrapper">
                            <div className="switch__toggle"></div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn theme-btn w-full text-center mt-4 p-3"
                        id="proceed"
                      >
                        Proceed
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div
              className="accordion accordion-flush help-accordion"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                  >
                    USSD CODES FOR AIRTIMES
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A PWA (Progressive Web App) template is a pre-designed
                    starting point or framework that helps developers build
                    Progressive Web Applications more efficiently...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default BuyData;
