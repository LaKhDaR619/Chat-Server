import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Header from "../Components/Header";
import RegisterForm from "../Components/RegisterForm";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <Grid container direction="row">
      <Header title="Register" />
      <Grid item xs={2} md={4} />
      <RegisterForm />
      <Grid item xs={2} md={4} />
    </Grid>
  );
}

export default Register;
