const saveToLocalStorage = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};

const removeItemFromLocalStorage = name => {
  localStorage.removeItem(name);
  console.log(`Local Storage item ${name} has been removed`);
};

export { saveToLocalStorage, removeItemFromLocalStorage };
