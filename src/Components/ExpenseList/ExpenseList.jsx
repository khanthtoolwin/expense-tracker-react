import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
const ExpenseList = ({ filteredExpenses }) => {
  return (
    <>
      <div>
        <ul
          style={{
            padding: "8px 16px",
            boxShadow: "3px 2px 4px black",
            margin: "0 auto",
          }}
        >
          {filteredExpenses.map((expense) => (
            <div key={expense.id}>
              <ExpenseItem expense={expense} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
