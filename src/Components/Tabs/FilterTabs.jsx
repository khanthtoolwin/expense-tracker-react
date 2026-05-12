import React from "react";
import "./FilterTabs.css";
const FilterTabs = ({ filterKey, setFilterKey }) => {
  return (
    <div className="tabs">
      <p
        className={`tab-item ${filterKey === "All" ? "active-tab" : " "}`}
        onClick={() => setFilterKey("All")}
      >
        All
      </p>
      <p
        className={`tab-item ${filterKey === "Incomes" ? "active-tab" : " "}`}
        onClick={() => setFilterKey("Incomes")}
      >
        Inflow
      </p>
      <p
        className={`tab-item ${filterKey === "Expenses" ? "active-tab" : " "}`}
        onClick={() => setFilterKey("Expenses")}
      >
        Outflow
      </p>
    </div>
  );
};

export default FilterTabs;
