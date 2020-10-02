import React from "react";

const PageNotFound = () => {
  const style404 = {
    fontSize: 72,
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <div style={style404}>404</div>
    </div>
  );
};

export default PageNotFound;