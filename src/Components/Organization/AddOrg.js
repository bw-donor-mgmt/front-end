import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux'

import { createOrg } from '../../actions'

const AddOrg = ({ touched, errors }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="name" />
      {touched.name && errors.name && <p className="UN">{errors.name}</p>}
      <Field type="text" name="mission" placeholder="mission" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikAddOrg = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  
  validationSchema: Yup.object().shape({
    name: Yup.string().required()
  }),

  handleSubmit(values, { props }) {
    props.createOrg(values)
  }
})(AddOrg);

export default connect(null, { createOrg })(FormikAddOrg);
