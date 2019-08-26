
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


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
  handleSubmit(values, formikBag) {
    const propsToSubmit = {"email": values.email, "password": values.password}
    const url = "https://bw-party-planner.herokuapp.com/api/auth/register";
    axios
    .post(url, propsToSubmit)
      .then(results => {
        console.log(results)
      })
      .catch(error => {
        console.log("Error: ", error.response)
      })
  }
})(Register);


// import React, { Component } from 'react'
// import UserProfile from './UserProfile'

// export class Register extends Component {

//     //create the state:
//     state= {
//         step: 1,
//         firstName: '',
//         lastName: '',
//         email: '',
//         city: '',
//         state: '',
//         bio: ''
//     }

//     //method: proceed to next step
//     nextStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step + 1
//         });
//     }
//     //method: go back to previous step 
//     prevStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step - 1
//         });
//     }

//     //handle change
//     handleChange = input => e => {
//         this.setState({[input]: e.target.value})
//     }
//     render() {
//         const { step } = this.state;
//         const { firstName, lastName, email, city, state, bio } = this.state;
//         const values = { firstName, lastName, email, city, state, bio }

//         switch(step) {
//             case 1: 
//                 return(
//                     <UserProfile
//                         nextStep={this.nextStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 )
//             case 2: 
//                 return(
//                     <h1>Confirm</h1>
//             )
//             case 3: 
//                 return(
//                     <h1>Success</h1>
//             )
//         }
//     }
// }

// export default Register































