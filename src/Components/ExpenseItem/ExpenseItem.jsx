import React from "react";
import "./ExpenseItem.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const ExpenseItem = ({
  expense,
  handleUpdateExpense,
  handleDeleteExpense,
  setEditingExpense,
}) => {
  const [isEditingText, setIsEditingText] = React.useState(false);
  const [localText, setLocalText] = React.useState(expense.text);
  const [isEditingAmount, setIsEditingAmount] = React.useState(false);
  const [localAmount, setLocalAmount] = React.useState(expense.amount);
  const sign = expense.type === "income" ? "+" : "-";
  const color = expense.type === "income" ? "green" : "red";

  const handleEditText = () => {
    if (localText.trim() === "") return;
    handleUpdateExpense({ ...expense, text: localText });
    setIsEditingText(false);
  };
  const handleEditAmount = () => {
    const numericAmount = Number(localAmount);
    if (numericAmount <= 0) return;
    handleUpdateExpense({ ...expense, amount: numericAmount });
    setIsEditingAmount(false);
  };
  return (
    <div className={"expense-item"}>
      {isEditingText ? (
        <>
          <input
            autoFocus
            className="edit-input"
            type="text"
            value={localText}
            onChange={(e) => setLocalText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditText()}
          />
        </>
      ) : (
        <h4 onDoubleClick={() => setIsEditingText(true)}>{expense.text} </h4>
      )}

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isEditingAmount ? (
          <input
            autoFocus
            className="edit-input"
            type="number"
            value={localAmount}
            onChange={(e) => setLocalAmount(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditAmount()}
          />
        ) : (
          <p
            className={`amount ${color}`}
            onDoubleClick={() => setIsEditingAmount(true)}
          >
            {sign + expense.amount.toLocaleString("en-US")} MMK
          </p>
        )}

        <MdEdit
          className="icon edit-icon"
          onClick={() => {
            setEditingExpense(expense);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        />
        <MdDelete
          className="icon delete-icon"
          onClick={() => handleDeleteExpense(expense.id)}
        />
      </div>
    </div>
  );
};

export default ExpenseItem;
