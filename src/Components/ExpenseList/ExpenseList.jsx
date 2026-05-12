import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseComposerForm from "../ExpenseComposer/ExpenseComposerForm";
const ExpenseList = ({ filteredExpenses, handleCreateExpense }) => {
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
      <ExpenseComposerForm handleCreateExpense={handleCreateExpense} />
    </>
  );
};

export default ExpenseList;
