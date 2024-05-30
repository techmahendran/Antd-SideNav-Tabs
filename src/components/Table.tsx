import { Table } from "antd";

import type { ColumnsType } from "antd/es/table";
import styles from "./table.module.scss";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Ref Number",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  { title: "Associated PO", dataIndex: "address", key: "1" },
  { title: "Supplier Name", dataIndex: "address", key: "2" },
  { title: "Shipping Agent", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  { title: "Column 9", dataIndex: "address", key: "9" },
  { title: "Column 10", dataIndex: "address", key: "10" },
  { title: "Column 11", dataIndex: "address", key: "11" },
  { title: "Column 12", dataIndex: "address", key: "12" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 50,
    address: "London Park",
  },
  {
    key: "4",
    name: "Jim Green",
    age: 55,
    address: "London Park",
  },
  {
    key: "5",
    name: "Jim Green",
    age: 60,
    address: "London Park",
  },
  {
    key: "6",
    name: "Jim Green",
    age: 65,
    address: "London Park",
  },
  {
    key: "7",
    name: "Jim Green",
    age: 70,
    address: "London Park",
  },
  {
    key: "8",
    name: "Jim Green",
    age: 43,
    address: "London Park",
  },
  // {
  //   key: "9",
  //   name: "Jim Green",
  //   age: 45,
  //   address: "London Park",
  // },
  // {
  //   key: "10",
  //   name: "Jim Green",
  //   age: 32,
  //   address: "London Park",
  // },
  // {
  //   key: "11",
  //   name: "Jim Green",
  //   age: 45,
  //   address: "London Park",
  // },
  // {
  //   key: "12",
  //   name: "Jim Green",
  //   age: 25,
  //   address: "London Park",
  // },
  // {
  //   key: "13",
  //   name: "Jim Green",
  //   age: 43,
  //   address: "London Park",
  // },
  // {
  //   key: "14",
  //   name: "Jim Green",
  //   age: 23,
  //   address: "London Park",
  // },
  // {
  //   key: "15",
  //   name: "Jim Green",
  //   age: 23,
  //   address: "London Park",
  // },
  // {
  //   key: "16",
  //   name: "Jim Green",
  //   age: 56,
  //   address: "London Park",
  // },
  // {
  //   key: "17",
  //   name: "Jim Green",
  //   age: 50,
  //   address: "London Park",
  // },
  // {
  //   key: "18",
  //   name: "Jim Green",
  //   age: 54,
  //   address: "London Park",
  // },
];

const TablePage = () => {
  return (
    <>
      <Table
        // style={{ width: "45%" }}
        className={styles.tableContainer}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1210 }}
      />
    </>
  );
};

export default TablePage;
