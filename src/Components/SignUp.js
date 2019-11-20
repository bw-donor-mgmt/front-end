import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from 'react-redux'
import * as Yup from "yup";
import { postSignup } from '../actions'
import { axiosWithAuth } from '../Utils/AxiosWithAuth';
import NavLogin from "./NavLogin";

const SignUpPage = ({ touched, errors }) => {
  return (
    <section className="signup-page">
      <header>
        <NavLogin />
      </header>
      <h1>SIGN UP!</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="UN">{errors.username}</p>
        )}
        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="PW">{errors.password}</p>
        )}
        <Field type="text" name="organization" placeholder="Organization" />
        {touched.organization && errors.organization && (
          <p className="PW">{errors.organization}</p>
        )}
        <button type="submit">Login</button>
      </Form>
    </section>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password, organization }) {
    return {
      username: username || "",
      password: password || "",
      organization: organization || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    organization: Yup.string().required()
  }),

  handleSubmit(values, { props, setStatus }) {
    props.postSignup()
  }
})(SignUpPage);

export default connect(null, { postSignup })(FormikSignupForm);

