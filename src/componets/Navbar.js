import React from "react";
import { Layout, Menu } from 'antd';
import { PlusOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';

const Navbar = () => {
  
    return (
      <Layout.Header className="navbar">
        {/* <div className="navbar-logo">
          <HomeOutlined />
        </div> */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="navbar-item"
        >
       
          <Menu.Item key="1" className="navbar-item">
          FoodiesHub
          {/* <HomeOutlined /> */}
          </Menu.Item>
          <Menu.Item key="2" className="navbar-item ad-container">
          <PlusOutlined /> Add Post
          </Menu.Item>
          <Menu.Item key="3" className="navbar-item">
          <UserOutlined /> Profile
          </Menu.Item>
          <Menu.Item key="4" className="navbar-item">
          <LogoutOutlined /> LogOut
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  };
  
  export default Navbar;