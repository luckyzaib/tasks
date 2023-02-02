export const getEntries = async () => {
  try {
    let entries = getDataFromLocalStorage();
    if (!entries) {
      entries = await getDataFromAPI();
    }
    return entries;
  } catch (error) {
    console.log("error", error);
  }
};

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("entries"));
};

export const getDataFromAPI = async () => {
  try {
    const res = await fetch("https://api.publicapis.org/entries");
    const data = await res.json();
    setEntriesToLocalStorage(data?.entries);
    return data?.entries || [];
  } catch (error) {
    console.log("error", error);
  }
};

export const setEntriesToLocalStorage = (entries) => {
  localStorage.setItem("entries", JSON.stringify(entries));
};
