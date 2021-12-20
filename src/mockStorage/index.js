const setItems = (key, items) => {
  return localStorage.setItem(key, JSON.stringify(items));
};

const getItems = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export { setItems, getItems };
