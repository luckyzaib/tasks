export const getEntries = async () => {
  try {
    let entries = getDataFromLocalStorage();
    if (!entries) {
      entries = await getDataFromAPI();
    }
    return entries;
  } catch (error) {
    alert(error);
  }
};

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("entries"));
};

const getDataFromAPI = async () => {
  const res = await fetch("https://api.publicapis.org/entries");
  const data = await res.json();
  localStorage.setItem("entries", JSON.stringify(data?.entries || []));
  return data?.entries || [];
};
