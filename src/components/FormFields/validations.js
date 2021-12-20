const formValidation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.startDate) {
    errors.startDate = "Start Date is Required";
  }
  if (!values.endDate && !values.currentJob) {
    errors.endDate = "End Date is Required";
  }
  return errors;
};

export { formValidation };
