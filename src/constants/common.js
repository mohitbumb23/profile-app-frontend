export const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Tag Line",
    key: "tagLine",
    dataIndex: "tagLine",
  },
  {
    title: "Company",
    key: "company",
    dataIndex: "company",
  },
  {
    title: "Title or Role",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "Start or End Month",
    key: "startEndMonths",
    dataIndex: "startEndMonths",
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Skills",
    key: "skills",
    dataIndex: "skills",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
  },
];

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  tagLine: "",
  company: "",
  description: "",
  title: "",
  skills: [],
  startEndMonths: "",
  startDate: "",
  endDate: "",
  currentJob: false,
};

export const formInputs = [
  {
    name: "firstName",
    placeholder: "Enter First Name",
    label: "First Name",
    validationString: "First Name is required",
  },
  {
    name: "lastName",
    placeholder: "Enter Last Name",
    label: "Last Name",
    validationString: "Last Name is required",
  },
  {
    name: "email",
    placeholder: "Enter Email",
    label: "Email",
  },
  {
    name: "tagLine",
    placeholder: "Enter Tag Line",
    label: "Tag Line",
    validationString: "Tag Line is required",
  },
  {
    name: "company",
    placeholder: "Enter Company",
    label: "Company",
    validationString: "Company is required",
  },
  {
    name: "title",
    placeholder: "Enter Title or Role",
    label: "Title or Role",
    validationString: "Title is required",
  },
  {
    name: "startDate",
    placeholder: "start date",
    label: "Start Date",
  },
  {
    name: "endDate",
    placeholder: "end date",
    label: "End Date",
  },
  {
    name: "currentJob",
    placeholder: "Current Job",
    label: "Current Job",
  },
  {
    name: "description",
    placeholder: "Enter Description",
    label: "Description",
    validationString: "Description is required",
  },
  {
    name: "skills",
    placeholder: "Enter Skills",
    label: "Skills",
    validationString: "Skills is required",
  },
];

export const textField = [
  "firstName",
  "lastName",
  "company",
  "title",
  "tagLine",
  "email",
];

export const datePickerField = ["startDate", "endDate"];

export const textAreaField = ["description"];

export const checkBoxField = ["currentJob"];

export const selectBoxField = ["skills"];
