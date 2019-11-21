import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../../Utils/AxiosWithAuth";

const AddDonations = ({ touched, errors, id }) => {
  return (
    <Form>
      <Field type="text" name="amount" placeholder="amount" />
      {touched.amount && errors.amount && <p className="UN">{errors.amount}</p>}
      <Field type="date" name="date" placeholder="date" />
      {touched.date && errors.date && <p className="PW">{errors.date}</p>}
      <Field type="number" name="campaign_id" placeholder="campaign id" />
      <Field type="number" name="donor_id" placeholder="donor id" />
      <button type="submit">Create New Donations</button>
    </Form>
  );
};

const FormikAddDonations = withFormik({
  mapPropsToValues({ amount, date, campaign_id, donor_id }) {
    return {
      amount: amount || "",
      date: date || "",
      campaign_id: campaign_id,
      donor_id: donor_id || 0
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
