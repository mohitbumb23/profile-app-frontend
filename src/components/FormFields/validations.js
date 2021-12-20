import staticText from "../../constants/en.json";

export const formValidation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = staticText.email_is_required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = staticText.invalid_email_address;
  }
  if (!values.startDate) {
    errors.startDate = staticText.start_date_is_required;
  }
  if (!values.endDate && !values.currentJob) {
    errors.endDate = staticText.end_date_is_required;
  }
  if (values.skills && !values.skills.length) {
    errors.skills = staticText.skills_is_required;
  }
  if (!values.description) {
    errors.description = staticText.description_is_required;
  } else if (
    values?.description &&
    values?.description.trim().split(/\s+/).length > 300
  ) {
    errors.description = staticText.maximum_300_words_only;
  }
  return errors;
};
