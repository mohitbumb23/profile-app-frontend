import { Input } from "formik-antd";
import { DatePicker, Checkbox, Select } from "antd";
import moment from "moment";

const InputField = ({
  values,
  handleChange,
  name,
  placeholder,
  validationString,
}) => {
  return (
    <Input
      name={name}
      minLength={2}
      placeholder={placeholder}
      value={values[`${name}`]}
      onChange={handleChange}
      validate={(v) => (!v ? validationString : undefined)}
    />
  );
};

const TextAreaField = ({
  values,
  handleChange,
  name,
  placeholder,
  validationString,
}) => {
  return (
    <Input.TextArea
      name={name}
      rows={5}
      placeholder={placeholder}
      value={values[`${name}`]}
      onChange={handleChange}
      validate={(v) => (!v ? validationString : undefined)}
      maxLength={300}
    />
  );
};

const DatePickerField = ({ values, name, setFieldValue }) => {
  return (
    <DatePicker
      name={name}
      value={values[`${name}`] ? moment(values[`${name}`]) : ""}
      onChange={(date) => setFieldValue(name, moment(date))}
      disabled={values?.currentJob && name === "endDate" ? true : false}
    />
  );
};

const CheckBoxField = ({ handleChange, values, name }) => {
  return (
    <Checkbox
      name={name}
      checked={values[`${name}`]}
      onChange={(event) => handleChange(event)}
    />
  );
};

const SelectField = ({ setFieldValue, values, name, placeholder }) => {
  const options = values.skills;
  return (
    <Select
      mode='tags'
      style={{ width: "100%" }}
      placeholder={placeholder}
      value={options}
      onChange={(value) => setFieldValue(name, value)}>
      {options}
    </Select>
  );
};

export {
  InputField,
  TextAreaField,
  DatePickerField,
  CheckBoxField,
  SelectField,
};
