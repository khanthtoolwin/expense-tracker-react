import React from "react";
const TitleBar = () => {
  return (
    <>
      <p>Text</p>

      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <p>Amount</p>
        <p style={{ marginLeft: "12px" }}>Actions</p>
      </div>
    </>
  );
};

export default TitleBar;
