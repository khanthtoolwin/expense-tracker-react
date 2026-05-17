import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import TitleBar from "./TitleBar";
const ExpenseList = ({
  filteredExpenses,
  handleUpdateExpense,
  handleDeleteExpense,
  setEditingExpense,
}) => {
  return (
    <div>
      <ul
        style={{
          padding: "8px 16px",
          boxShadow: "3px 2px 4px black",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TitleBar />
        </div>
        <hr />
        {filteredExpenses.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem
              expense={expense}
              handleDeleteExpense={handleDeleteExpense}
              handleUpdateExpense={handleUpdateExpense}
              setEditingExpense={setEditingExpense}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
