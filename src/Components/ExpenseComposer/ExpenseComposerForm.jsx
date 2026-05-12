import React from "react";
import "./ExpenseComposerForm.css";
import { CgChevronDownO } from "react-icons/cg";
import { CgChevronUpO } from "react-icons/cg";
const ExpenseComposerForm = ({ handleCreateExpense }) => {
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("income");

  const [isOpen, setIsOpen] = React.useState(false);

  function createExpense(text, amount, type) {
    return {
      id: Math.floor(Math.random() * 10000),
      text,
      amount,
      type,
    };
  }

  const handleCreateExpenseClick = (e) => {
    e.preventDefault();
    const numericAmount = Number(amount);
    if (numericAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    const expense = createExpense(text, numericAmount, type);
    handleCreateExpense(expense);
    setText("");
    setAmount("");
    setType("");
  };

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const toggleButton = {
    display: "flex",
    alignItems: "center",
    background: "#1e1e1e",
    gap: 3,
    padding: "8px 16px",
    color: "white",
    maxWidth: "105px",
    borderRadius: "16px",
    cursor: "pointer",
  };
  return (
    <>
      <div className="form-container">
        <div
          style={{
            display: "flex",
            flexDirection: isOpen ? "column" : "row",
            alignItems: isOpen ? "flex-start" : "center",
            gap: "8px",
          }}
        >
          {isOpen === false ? (
            <div style={{ ...toggleButton }} onClick={handleOpenForm}>
              <small>Toggle Form</small>
              <CgChevronDownO style={{ fontSize: "24px" }} />
            </div>
          ) : (
            <div style={{ ...toggleButton }} onClick={handleOpenForm}>
              <small>Toggle Form</small>
              <CgChevronUpO style={{ fontSize: "24px" }} />
            </div>
          )}
          <h4
            style={{
              fontSize: isOpen ? "1.2rem" : "0.9rem",
              letterSpacing: "0.011em",
            }}
          >
            Add your daily incomes & expenses
          </h4>
        </div>

        {isOpen && (
          <>
            <form onSubmit={handleCreateExpenseClick}>
              <div className="form-control">
                <label htmlFor="">Item Name</label>
                <input
                  type="text"
                  value={text}
                  placeholder="e.g., Coffee"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label>Entry Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ExpenseComposerForm;
