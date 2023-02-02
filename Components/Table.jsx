import React from "react";
import { Space, Table as AntdTable } from "antd";

const Table = ({ data, handleEdit }) => {
  return (
    <AntdTable
      dataSource={data}
      columns={[
        ...Object.keys(data[0]).map((key) => ({
          title: key.toUpperCase(),
          key: key,
          dataIndex: key,
        })),
        {
          title: "Action",
          key: "action",
          render: (_, record, index) => (
            <Space onClick={() => handleEdit(index)} size="middle">
              <a>Edit</a>
            </Space>
          ),
        },
      ]}
    />
  );
};

export { Table };
