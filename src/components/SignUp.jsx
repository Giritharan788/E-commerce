import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../index.css";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = Yup.object().shape({
  Name: Yup.string().required("Enter the name"),
  Email: Yup.string()
    .required("Enter the email")
   .email("Enter a valid email"),
  Password: Yup.string().required("Enter the password"),
  cPassword: Yup.string()
    .required("Enter the password")
    .oneOf([Yup.ref("Password")], "Password must match"),
});

const SignUp = () => {
  let [input, setInput] = useState("");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver : yupResolver(schema),
  });

  let handleData = (data) => {
    setInput(data);
    reset()
  };

  return (
    <Paper
      elevation={20}
      style={{
        width: "25rem",
        height: "max-content",
        margin: "3rem auto",
        display: "grid",
        gap: "5px",
      }}
      component={"form"}
      onSubmit={handleSubmit(handleData)}
    >
      <Typography
        variant="h5"
        style={{
          margin: "5px",
          marginBottom: "15px",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        Create New Account
      </Typography>

      <TextField
        label="Name"
        style={{ margin: "10px" }}
        {...register("Name")}
        // value={input.Name}
        error={!!errors.Name}
        helperText={errors.Name?.message}
      />
      <TextField
        label="Email"
        style={{ margin: "10px" }}
        {...register("Email")}
        // value={input.Email}
        error={!!errors.Email}
        helperText={errors.Email?.message}
      />
      <TextField
        label="Password"
        type="password"
        style={{ margin: "10px" }}
        {...register("Password")}
        // value={input.Password}
        error={!!errors.Password}
        helperText={errors.Password?.message}
      />
      <TextField
        label="Confirm Password"
        type="password"
        style={{ margin: "10px" }}
        {...register("cPassword")}
        // value={input.cPassword}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />
      <Button type="submit" style={{ margin: "10px" }} variant="contained">
        Sign Up
      </Button>
    </Paper>
  );
};

export default SignUp;
