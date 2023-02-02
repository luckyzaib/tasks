import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Table, Loader, Modal } from "../Components";
import { getEntries, setEntriesToLocalStorage } from "../services/entryService";
import { getDeepCopy } from "../services/utils";

const firstTask = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [isEditModal, setIsEditModal] = useState(false);
  const [focusedData, setFocusedData] = useState({});
  const [index, setIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _entries = await getEntries();
    if (_entries.length > 0) {
      setEntries(_entries);
    } else {
      setError("No record found");
    }
  };

  const handleEdit = (_index) => {
    setFocusedData({ ...entries[_index] });
    setIndex(_index);
    setIsEditModal(true);
  };

  const onSubmit = (values) => {
    let valuesCopy = getDeepCopy(entries);
    valuesCopy[index] = values;
    setEntries(valuesCopy);
    setEntriesToLocalStorage(valuesCopy);
    setIsEditModal(false);
  };

  return (
    <>
      <h1>With Entries Api</h1>
      {entries.length > 0 ? (
        <>
          <Table data={entries} handleEdit={handleEdit} />
          {isEditModal && (
            <Modal
              isOpen={isEditModal}
              data={focusedData}
              onSubmit={onSubmit}
              onCancel={() => setIsEditModal(false)}
            />
          )}
        </>
      ) : error === "" ? (
        <Loader />
      ) : (
        <Typography>{error}</Typography>
      )}
    </>
  );
};

export default firstTask;
