import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { validateEmail } from "../../utils/helpers";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function FormPropsTextFields() {
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyles();
  //hook to manage form data
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`All fields are required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  console.log(formState);

  return (
    <form className={classes.root} autoComplete="off">
      <div>
        <TextField
          //error
          //id="standard-error-helper-text"
          //label="Error"
          //helperText="Incorrect entry."
          required
          id="standard-password-input"
          label="Name"
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          //error
          //id="filled-error"
          //label="Error"
          //variant="filled"
          required
          id="standard-password-input"
          label="Email"
          type="email"
          defaultValue={email}
          name="email"
          onBlur={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          id="standard-password-input"
          label="Message"
          multiline
          rows={6}
          type="text"
          fullWidth
          margin="normal"
          name="message"
          defaultValue={message}
          onBlur={handleChange}
        />
      </div>
      {errorMessage && (
        <div>
          <p className="MuiTypography-h6" style={{ color: "red" }}>
            {errorMessage}
          </p>
        </div>
      )}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
