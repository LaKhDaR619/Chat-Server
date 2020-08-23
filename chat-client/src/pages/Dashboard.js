import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
    return () => {};
  }, []);

  return <div className="wrapper"></div>;
}

export default Dashboard;
