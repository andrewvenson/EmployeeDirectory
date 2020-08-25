import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "navy",
    height: 150,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "4px solid red",
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: "white" }}>Employee Directory</h1>
      <p style={{ color: "white" }}>
        Click on the carrots to filter by heading or use the search box to
        narrow your results.
      </p>
    </header>
  );
};

export default Header;
