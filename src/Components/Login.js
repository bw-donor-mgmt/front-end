import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";
import NavLogin from "./Nav/NavLogin";

const LoginPage = ({ touched, errors }) => {
  return (
    <section className="login-page">
      <header>
        <NavLogin />
      </header>
      <h1>Login Here</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="UN">{errors.username}</p>
        )}
        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="PW">{errors.password}</p>
        )}
        <button type="submit">Login</button>
      </Form>
    </section>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(LoginPage);
export default FormikLoginForm;
console.log("this is the HOC", FormikLoginForm);
