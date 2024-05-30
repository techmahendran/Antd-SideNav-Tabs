import { Table } from "antd";

import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  ref_number: string;
  Associated_PO: string;
  Supplier_Name: string;
  Shipping: string;
  Shippment:string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "SR Number",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Ref Number",
    width: 100,
    dataIndex: "ref_number",
    key: "ref_number",
    fixed: "left",
  },
  { title: "Associated PO", dataIndex: "Associated_PO", key: "1" },
  { title: "Supplier Name", dataIndex: "Supplier_Name", key: "2" },
  { title: "Shipping Agent", dataIndex: "Shipping", key: "3" },
  { title: "Shippment", dataIndex: "Shippment", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  { title: "Column 9", dataIndex: "address", key: "9" },
  { title: "Column 10", dataIndex: "address", key: "10" },
  { title: "Column 11", dataIndex: "address", key: "11" },
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
    name: "SR20241A0352",
    ref_number: "R001",
    Associated_PO: "PO20241A0559",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "2",
    name: "SR20241A0350",
    ref_number: "ROO1",
    Associated_PO: "PO20241A0559",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "3",
    name: "SR20241A0349",
    ref_number: "*1234*",
    Associated_PO: "PO20241A0559",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "4",
    name: "SR20241A0348",
    ref_number: "*1234*",
    Associated_PO: "London Park",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "5",
    name: "SR20241A0347",
    ref_number: "*1234*",
    Associated_PO: "London Park",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "6",
    name: "SR20241A0346",
    ref_number: "*1234*",
    Associated_PO: "London Park",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "7",
    name: "SR20241A0345",
    ref_number: "10002",
    Associated_PO: "London Park",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  {
    key: "8",
    name: "SR20241A0345",
    ref_number: "10002",
    Associated_PO: "London Park",
    Supplier_Name: "Highland Supply",
    Shipping: "Singular Point AG",
    Shippment:'INENR',
    address: "New York Park",
  },
  // {
  //   key: "9",
  //   name: "Jim Green",
  //  ref_number: 45,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "10",
  //   name: "Jim Green",
  //  ref_number: 32,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "11",
  //   name: "Jim Green",
  //  ref_number: 45,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "12",
  //   name: "Jim Green",
  //  ref_number: 25,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "13",
  //   name: "Jim Green",
  //  ref_number: 43,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "14",
  //   name: "Jim Green",
  //  ref_number: 23,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "15",
  //   name: "Jim Green",
  //  ref_number: 23,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "16",
  //   name: "Jim Green",
  //  ref_number: 56,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "17",
  //   name: "Jim Green",
  //  ref_number: 50,
  //   Associated_PO: "London Park",
  // },
  // {
  //   key: "18",
  //   name: "Jim Green",
  //  ref_number: 54,
  //   Associated_PO: "London Park",
  // },
];

const TablePage = () => {
  return (
    <>
      <Table
        // style={{ width: "1210px" }}
        style={{ width: "45%" }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1210 }}
        // scroll={{ x: 1300 }}
      />
    </>
  );
};

export default TablePage;
