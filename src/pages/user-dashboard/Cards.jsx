import { PlusCircle} from "react-feather";
import BankCard from "../../components/userComponents/BankCard";
import Wema from "../../assets/user-asset/images/card/wema.png";
import GTBank from "../../assets/user-asset/images/card/GTBank.png";
import Menu from "../../components/userComponents/Menu";
const Card = () => {
  const cardDetails = [
    { bankName: "Wema", cardNumber: "53837******7485", image: Wema },
    { bankName: "GTBank", cardNumber: "537******7485", image: GTBank },
  ];
  return (
    <>
      <BankCard cardDetails={cardDetails} />
      <div
        className="add-card d-flex justify-content-center"
        style={{ marginTop: "70px" }}
      >
        <div
          className="d-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-secondary"
          style={{ width: "65px", height: "65px" }}
        >
          <PlusCircle style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Card;
<></>;
