import React, { useState } from 'react';
import { AutoComplete, Button, Checkbox, Form, Input, Select } from 'antd';
import Logo from "../Assets/Training-train-810x782.png";
import { Navigate, useNavigate } from 'react-router-dom';

const { Option } = Select;

// Bỏ labelCol và wrapperCol để đưa label lên trên input
const formItemLayout = {
  wrapperCol: {
    span: 24,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 24,
    offset: 0,
  },
};


const App = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const onFinish = () => {
    // Không kiểm tra form, trực tiếp chuyển hướng
    navigate('/main');
  };

  return (
    <div className='body'>
    <Form className='custom-form'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{
        width:408,
        height:578
      }}
      scrollToFirstError
    >
    <p className='sign-in-title'>Đăng nhập</p>
    <div className='form-item'>
      <Form.Item
        name="gender"
        label="Vai trò"
        // rules={[
        //   {
        //     message: 'Please select gender!',
        //   },
        // ]}
      >
        <Select placeholder="Chọn vai trò">
          <Option value="student">Học sinh</Option>
          <Option value="teacher">Giáo viên</Option>
          <Option value="parents">Phụ huynh</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="username"
        label="Tên đăng nhập"
        // rules={[
        //   {
        //     message: 'Vui lòng nhập tên đăng nhập!',
        //   },
        // ]}
      >
        <Input placeholder="Nhập tên đăng nhập" />
      </Form.Item>


      <Form.Item
        name="password"
        label="Mật khẩu"
        // rules={[
        //   {
        //     message: 'Vui lòng nhập mật khẩu!',
        //   },
        // ]}
        // hasFeedback
      >
        <Input.Password placeholder='Nhập mật khẩu'/>
      </Form.Item>

      <Form.Item
        name="rememberAccount"
        valuePropName="checked"
        // {...tailFormItemLayout}
      >
        <Checkbox>
          Lưu tài khoản
        </Checkbox>
      </Form.Item>
        </div>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>

      <div className='form-layer'>
        Vui lòng nhập đầy đủ thông tin để đăng nhập vào hệ thống
      </div>
      <div className='form-img'>
        <img src={Logo} alt=''></img>
      </div>
    </Form>
    </div>
  );
};

export default App;
