export const getEntries = async () => {
  try {
    let entries = getDataFromLocalStorage("entries");
    if (!entries) {
      entries = await getDataFromAPI();
    }
    return entries;
  } catch (error) {
    console.log("error", error);
  }
};

const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getDataFromAPI = async () => {
  try {
    const res = await fetch("https://api.publicapis.org/entries");
    const data = await res.json();
    setEntriesToLocalStorage("entries", data?.entries);
    return data?.entries || [];
  } catch (error) {
    console.log("error", error);
  }
};

export const setEntriesToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
