import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";

const AddDonations = ({ touched, errors }) => {
  return (
    <Form>
      <Field type="text" name="amount" placeholder="amount" />
      {touched.amount && errors.amount && <p className="UN">{errors.amount}</p>}
      <Field type="date" name="date" placeholder="date" />
      {touched.date && errors.date && <p className="PW">{errors.date}</p>}
      <button type="submit">Create New Donations</button>
    </Form>
  );
};

const FormikAddDonations = withFormik({
  mapPropsToValues({ amount, date }) {
    return {
      amount: amount || "",
      date: date || ""
    };
  },
  validationSchema: Yup.object().shape({
    amount: Yup.string().required(),
    date: Yup.string().required()
  }),
  handleSubmit(values, { props, setStatus }) {
    axiosWithAuth()
      .post("/donations", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(AddDonations);

export default FormikAddDonations;
