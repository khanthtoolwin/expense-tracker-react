import React from "react";
import "./Dashboard.css";
const BalanceDashboard = ({ expenses }) => {
  const totalBalance = expenses.reduce((state, currentObj) => {
    const amount = currentObj.amount;
    if (currentObj.type === "income") {
      return state + amount;
    } else if (currentObj.type === "expense") {
      return state - amount;
    }
  }, 0);
  return (
    <div className="dashboard-container">
      <h3>Your Balance</h3>
      <h2 className="amount">{Math.abs(totalBalance).toLocaleString()} MMK</h2>
    </div>
  );
};

export default BalanceDashboard;
