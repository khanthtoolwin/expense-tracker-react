import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = ({ expense }) => {
  const sign = expense.type === "income" ? "+" : "-";
  const color = expense.type === "income" ? "green" : "red";
  return (
    <div>
      <div className={"expense-item"}>
        <h4>{expense.text}</h4>
        <p className={`amount ${color}`}>
          {sign + expense.amount.toLocaleString("en-US")} MMK
        </p>
      </div>
    </div>
  );
};

export default ExpenseItem;
