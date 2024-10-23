// src/data/transactions.js

import { Phone, DollarSign, ShoppingCart, Zap } from "react-feather"; // Import icons

const Transactions = [
  {
    id: 1,
    type: "Airtime Purchase",
    description: "Airtime purchase for +2348123456789",
    date:"Oct 22nd. 1:17 PM",
    icon: <Phone className="text-success" />,
    status:"",
    amount:"+₦148,000.00",
},
  {
    id: 2,
    type: "Utility Payment",
    description: "Payment for electricity bill",
    date:"Oct 22nd. 1:00 PM",
    icon: <Zap className="text-warning" />,
    status:"",
    amount:"+₦5,000.00",
},
  {
    id: 3,
    type: "Shopping",
    description: "Purchase at the local supermarket",
    date:"Oct 22nd. 1:07 AM",
    icon: <ShoppingCart className="text-info" />,
    status:"",
    amount:"+₦9,000.00",
},
  {
    id: 4,
    type: "Funds Transfer",
    description: "Transfer to OLULEYE ADUKE FOLAKE",
    date:"Oct 22nd. 10:17 AM",
    icon: <DollarSign className="text-success" />,
    status:"",
    amount:"+₦2,000.00",
},
  // Add more transactions as needed
];

export default Transactions;
