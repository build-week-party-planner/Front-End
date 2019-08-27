import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


function Login(props) {

  const {touched} = props
  const {errors} = props

  return(
    <Form className="form">
      <h1>Welcome to the Party Planner!</h1>
      <h3>Login</h3>
      <div className="form-box">
        <label className="label">Username: </label>
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


export default withFormik({
    mapPropsToValues({email, password}) {
      return {
        email: email || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Username is required"),
      password: Yup.string().min(8).required("Password is ALSO required")
    }),
  
    
    //save token to local storage
    handleSubmit(values, props) {
      console.log(props)
      const propsToSubmit = {"email": values.email, "password": values.password}
      const url = "https://bw-party-planner.herokuapp.com/api/auth/login";
      axios
      .post(url, propsToSubmit)
        .then(results => {
          localStorage.setItem("token", results.data.token);
          props.props.history.push('/dashboard')
        })
        .catch(error => {
          console.log("Error: ", error.response)
        })
    }
  })(Login);