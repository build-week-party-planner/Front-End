
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { connect } from 'react-redux'
import { handleSuccessfulRegister } from '../actions'

function Register({touched, errors}) {
  return(
    <Form className="form">
      <h3>Register</h3>
      <div className="form-box">
        <label className="label">Email: </label>
        <Field
          className="input"
          name="email"
          type="text"
        />
        <p>{touched.email && errors.email}</p>
      </div>
      <div className="form-box">
        <label className="label">Password: </label>
        <Field 
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>
      <button type="submit" className="button">
        Submit
      </button>
    </Form>
  )
}

export const FormikRegister = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Username is required"),
    // password: Yup.string().min(8).required("Password is ALSO required")
  }),

  //save token to local storage
  handleSubmit(values) {
    const propsToSubmit = {"email": values.email, "password": values.password}
    const url = "https://bw-party-planner.herokuapp.com/api/auth/register";
    axios
    .post(url, propsToSubmit)
      .then(results => {
        console.log(results.data)
      })
      .catch(error => {
        console.log("Error: ", error.response)
      })
  }
})(Register);
































