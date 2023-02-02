import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Table, Loader, Modal } from "../Components";
import { getEntries } from "../services/entryService";

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
              index={index}
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
