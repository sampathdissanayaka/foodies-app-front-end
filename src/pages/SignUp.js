// import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'

function SignIn() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const reqBody = { 
      userName: values.username,
      password: values.password,
      email: values.email
     };

      axios.post(`http://localhost:8081/api/mn/user/register`, reqBody).then((response) => {
        setLocalStorage(response.userId);
        navigate('/');
        // alert(response);
    }).catch(error => {
      alert(error);
    });
  };

const setLocalStorage = (data) => {
  localStorage.setItem('id', JSON.stringify(data));
}

  return (
    <Form className="login-form" onFinish={onFinish}>
        <h2>FoodiesHub</h2>
      <Form.Item label="User Name" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      Or <Link to={'/sign-in'}>Already Have a Account!</Link>

    </Form>
  );
}

export default SignIn;