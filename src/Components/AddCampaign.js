import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../Utils/AxiosWithAuth";

const AddCampaign = ({ touched, errors }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="name" />
      {touched.name && errors.name && <p className="UN">{errors.name}</p>}
      <Field type="text" name="description" placeholder="description" />
      {touched.description && errors.description && (
        <p className="PW">{errors.description}</p>
      )}
      <Field type="number" name="goal" placeholder="goal" />
      {touched.goal && errors.goal && <p className="UN">{errors.goal}</p>}
      <button type="submit">Create Campaign</button>
    </Form>
  );
};

const FormikAddCampaign = withFormik({
  mapPropsToValues({ name, description, goal }) {
    return {
      name: name || "",
      description: description || "",
      goal: goal || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    goal: Yup.number().required()
  }),
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("/campaigns", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(AddCampaign);

export default FormikAddCampaign;
