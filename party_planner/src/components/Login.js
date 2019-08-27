import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { handleSuccessfulLogin } from '../actions'


function Login(props) {

  const {touched} = props
  const {errors} = props

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

const FormikLogin = withFormik({
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
    handleSubmit(values, props) {
      console.log(props)
      const propsToSubmit = {"email": values.email, "password": values.password}
      const url = "https://bw-party-planner.herokuapp.com/api/auth/login";
      axios
      .post(url, propsToSubmit)
        .then(results => {
          localStorage.setItem("user_id", results.data.id);
          localStorage.setItem("token", results.data.token);
          props.props.handleSuccessfulLogin(results.data.id);
          props.props.history.push('/dashboard');
        })
        .catch(error => {
          console.log("Error: ", error.response)
        })
    }
  })(Login);

  const mapStateToProps = state => {
    return{
      state
    }
  }
  export default connect(mapStateToProps,{handleSuccessfulLogin})(FormikLogin)
