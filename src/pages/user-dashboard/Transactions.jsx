import React from "react";
import { ArrowUpRight } from "react-feather";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";
import ListViewTitle from "../../components/userComponents/ListViewTitle";
import Transactions from "../../components/datas/TransactionDetails";
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <>
      <HeaderNavigation title="Transaction History" />
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "100px" }}
      >
        <ListViewTitle title="Today" />
        {Transactions.map((transaction) => (
          <Link
            to="/dashboard/user/transactions-detail"
            key={transaction.id}
            className="card text-decoration-none bg-gray-200 mb-3"
          >
            <div className="card-body d-flex align-items-center justify-content-between p-0">
              <div className="card-body d-flex align-items-center">
                <div
                  className="me-3 d-flex justify-content-center align-items-center rounded text-white"
                  style={{
                    minWidth: "50px",
                    height: "50px",
                    backgroundColor: "#333333",
                  }}
                >
                  {transaction.icon}
                </div>
                <div className="">
                  <p
                    className="text-truncate mb-0 text-muted"
                    style={{ maxWidth: "160px" }}
                  >
                    {transaction.description}
                  </p>
                  <span
                    className="text-muted pt-2"
                    style={{ fontSize: "10px" }}
                  >
                    {transaction.date}
                  </span>
                </div>
              </div>
              <div className="">
                <span className="fs-6 d-block text-nowrap text-success pe-2">
                  {transaction.amount}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Transaction;
