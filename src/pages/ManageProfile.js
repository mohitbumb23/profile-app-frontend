import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { Button, Row, Col } from "antd";
import moment from "moment";

import { setItems, getItems } from "../mockStorage/index";
import {
  initialValues,
  formInputs,
  textField,
  datePickerField,
  textAreaField,
  checkBoxField,
  selectBoxField,
} from "../constants/common";
import {
  InputField,
  TextAreaField,
  DatePickerField,
  CheckBoxField,
  SelectField,
} from "../components/FormFields";
import constants from "../constants/en.json";
import { formValidation } from "../components/FormFields/validations";

const { usersUrl } = constants.routes;

const ManageProfile = () => {
  let [profile, setProfile] = useState(initialValues);
  let [action, setAction] = useState("Submit");
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const userDetails = {
      ...data,
      key: Date.now(),
    };
    const profiles = getItems("profile");
    if (profiles?.length) {
      profiles.push(userDetails);
      setItems("profile", profiles);
    } else {
      setItems("profile", [userDetails]);
    }
    navigate(usersUrl);
  };

  const handleDate = (values) => {
    const startDate = values?.startDate
      ? moment(values?.startDate).format("MMM YYYY")
      : "";
    const endDate = values?.endDate
      ? moment(values?.endDate).format("MMM YYYY")
      : "";
    values.startEndMonths = `${startDate} - ${
      values?.currentJob ? "Present" : endDate
    }`;
    return values;
  };

  return (
    <>
      <Row style={{ marginTop: "15px" }}>
        <Col span={12} offset={6}>
          <Formik
            enableReinitialize={true}
            initialValues={profile}
            validate={(values) => formValidation(values)}
            onSubmit={(values, { resetForm }) => {
              values = handleDate(values);
              handleSubmit(values);
              resetForm();
            }}>
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                {formInputs.map((input, i) => {
                  const name = input.name || "";
                  const label = input.label || "";
                  const placeholder = input.placeholder || "";
                  const validationString = input.validationString || "";
                  return (
                    <Form.Item name={name} label={label} key={name}>
                      {textField.includes(name) && (
                        <InputField
                          key={i}
                          values={values}
                          handleChange={handleChange}
                          name={name}
                          label={label}
                          placeholder={placeholder}
                          validationString={validationString}
                        />
                      )}
                      {textAreaField.includes(name) && (
                        <TextAreaField
                          key={i}
                          values={values}
                          handleChange={handleChange}
                          name={name}
                          label={label}
                          placeholder={placeholder}
                          validationString={validationString}
                        />
                      )}
                      {datePickerField.includes(name) && (
                        <DatePickerField
                          key={i}
                          values={values}
                          handleChange={handleChange}
                          name={name}
                          setFieldValue={setFieldValue}
                        />
                      )}
                      {checkBoxField.includes(name) && (
                        <CheckBoxField
                          key={i}
                          values={values}
                          handleChange={handleChange}
                          name={name}
                        />
                      )}
                      {selectBoxField.includes(name) && (
                        <SelectField
                          key={i}
                          values={values}
                          setFieldValue={setFieldValue}
                          name={name}
                          placeholder={placeholder}
                        />
                      )}
                    </Form.Item>
                  );
                })}
                <Button.Group>
                  <SubmitButton type='submit'>{action}</SubmitButton>
                </Button.Group>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default ManageProfile;
