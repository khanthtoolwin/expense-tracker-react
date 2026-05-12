import React from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import FilterTabs from "./Components/Tabs/FilterTabs";
import NoTransaction from "./Components/ExpenseList/NoTransaction";
import BalanceDashboard from "./Components/Dashboard/BalanceDashboard";
const App = () => {
  const [expenses, setExpenses] = React.useState([]);
  const [filterKey, setFilterKey] = React.useState("All");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setIsLoading(true);
      const url = "http://localhost:5000/expenses";
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Server responded with an error.");
        }
        const data = await response.json();
        if (ignore === false) {
          setExpenses(data);
          setError(null);
        }
      } catch (error) {
        if (ignore === false) {
          setExpenses([]);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    console.log(`rendered`);
    return () => {
      ignore = true;
    };
  }, []);
  const handleCreateExpense = (newExpense) => {
    const newExpenses = [newExpense, ...expenses];
    setExpenses(newExpenses);
  };

  const filteredExpenses = expenses.filter((item) => {
    if (filterKey === "All") return true;
    if (filterKey === "Incomes") return item.type === "income";
    if (filterKey === "Expenses") return item.type === "expense";
    return true;
  });

  const mainContainerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "0 24px",
  };
  return (
    <>
      {error && <p className="red">{error}</p>}
      <div style={{ ...mainContainerStyle }}>
        <h1 style={{ letterSpacing: "-0.01em", marginBottom: 0 }}>
          EXPENSE TRACKER
        </h1>
        <p>Manage your daily expenses</p>

        {/** Show user balance amount */}
        <BalanceDashboard expenses={expenses} />

        <div className="hero-section">
          <h2
            style={{ textAlign: "center", marginBottom: 0, marginTop: "16px" }}
          >
            Your Recent
            {filterKey === "All"
              ? " Transactions"
              : filterKey === "Incomes"
                ? " Incomes"
                : " Expenses"}
          </h2>

          {/** Filter according to type of flow */}
          <FilterTabs filterKey={filterKey} setFilterKey={setFilterKey} />
        </div>
        {isLoading && (
          <p style={{ textAlign: "center" }}>Fetching transactions...</p>
        )}
        {!isLoading && expenses.length > 0 && (
          /** Show expense items */
          <ExpenseList
            filterKey={filterKey}
            filteredExpenses={filteredExpenses}
            handleCreateExpense={handleCreateExpense}
            isLoading={isLoading}
          />
        )}
        {!isLoading && expenses.length === 0 && (
          <NoTransaction filterKey={filterKey} />
        )}
      </div>
    </>
  );
};

export default App;
