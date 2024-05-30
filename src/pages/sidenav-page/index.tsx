import styles from "./sidenav-page.module.scss";

import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContainerOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, Typography, TabsProps, Tabs } from "antd";

import TablePage from "@/components/Table";
import TablePage2 from "../../components/Table2";
import TablePage3 from "../../components/Table3";

const { Title } = Typography;

const { Header, Sider } = Layout;

const SideNavPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
    setIsActive(!isActive);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Purchase Order",
      children: (
        <>
          <TablePage />
        </>
      ),
    },
    {
      key: "2",
      label: "Production Order",
      children: (
        <>
          <TablePage2 />
        </>
      ),
    },
    {
      key: "3",
      label: "Shipping Request",
      children: (
        <>
          <TablePage3 />
        </>
      ),
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.title_logo}>
            <Title className={styles.title}>
              {collapsed ? "E" : "Emser Tile"}
            </Title>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleMenu}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#fff",
                position: "relative",
                top: "-10px",
              }}
            />
          </div>

          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            className={styles.sidenav}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Orders",
              },
              {
                key: "3",
                icon: <UsergroupAddOutlined />,
                label: "Shipments",
              },
              {
                key: "4",
                icon: <UsergroupAddOutlined />,
                label: "Masters",
              },
              {
                key: "5",
                icon: <VideoCameraOutlined />,
                label: "Reports",
              },
              {
                key: "6",
                icon: <ContainerOutlined />,
                label: "Contract Info",
              },
              {
                key: "7",
                icon: <SettingOutlined />,
                label: "Settings",
              },
              {
                key: "8",
                icon: <VideoCameraOutlined />,
                label: "PO Changes",
              },
            ]}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Notifications",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Resource Bank",
              },
              {
                key: "3",
                icon: <UsergroupAddOutlined />,
                label: "Bowen Higgins >",
              },
            ]}
          />
        </Sider>

        <Layout className={styles.mainpage}>
          <Header className={isActive ? styles.header : styles.topheader}>
            <Title id={styles.orderTitle}>Order Management</Title>

            <div className={styles["tabs"]}>
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </Header>
        </Layout>
      </Layout>
    </>
  );
};

export default SideNavPage;
