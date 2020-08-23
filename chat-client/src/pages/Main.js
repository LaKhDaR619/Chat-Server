import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Main({ loggedIn }) {
  useEffect(() => {
    document.title = "Main";
    return () => {};
  }, []);

  return (
    <div className="main-wrapper">
      <h1>Main</h1>
      <h1>{loggedIn + ""}</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Main);
