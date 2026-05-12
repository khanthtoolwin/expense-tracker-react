import React from "react";
import { FaFolderOpen } from "react-icons/fa6";
const NoTransaction = ({ filterKey }) => {
  const messages = {
    All: "You haven't added any data yet.",
    Incomes: "No income recorded. Time to make some money!",
    Expenses: "No expenses found. You're doing great at saving!",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        borderRadius: "12px",
        color: "#cccccc",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "5px" }}>
        <FaFolderOpen />
      </div>
      <h4 style={{ margin: 0 }}>{messages[filterKey]}</h4>
    </div>
  );
};

export default NoTransaction;
