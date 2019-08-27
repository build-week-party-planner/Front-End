import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function Login({ touched, errors, values, handleChange }) {
  return(
    <Form className="form">
      <MuiThemeProvider>
        <AppBar title="Party Planner - LOGIN" />
          <TextField
            hintText="Enter your email"
            name="email"
            type="text"
            onChange={handleChange('email')}
            defaultValue={values.firstName}
          />
          <p>{touched.email && errors.email}</p>
          <TextField
            hintText="Password"
            name="password"
            type="password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
          <p>{touched.password && errors.password}</p>
          <RaisedButton
                label="Login"
          />
          <br />
        <input type="checkbox" id="remember_me" name="_remember_me"  method="post"/>
        <label for="remember_me">Keep me logged in</label>
      </MuiThemeProvider>
  
    </Form>
  
  )
}

export default withFormik({
    mapPropsToValues({email, password}) {
      return {
        email: email || "",
        password: password || "",
        rememberMe: true
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Username is required"),
      // password: Yup.string().min(8).required("Password is ALSO required")
    }),
  
    
    //save token to local storage
    handleSubmit(values) {
      const propsToSubmit = {"email": values.email, "password": values.password}
      const url = "https://bw-party-planner.herokuapp.com/api/auth/login";
      axios
      .post(url, propsToSubmit)
        .then(results => {
          localStorage.setItem("token", results.data.payload);
          console.log(results)
        })
        .catch(error => {
          console.log("Error: ", error.response)
        })
    }
  })(Login);

