import React from 'react';
import './App.css';
import { Row, Col, Form, Input, Button } from "antd"

function App() {
  const layout = {
    labelCol: {
      xs: 6, sm: 8, md: 10
    },
    wrapperCol: {
      xs: 18, sm: 16, md: 14
    },
  };

  let onFinish = (value) => {
    console.log(value)
  }
  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{required:true , message:"คุณต้องกรอกช่องนี้"},{max:6, min:3, message: "ชื่อต้องอยู่ระหว่าง 3 ถึง 6 ตัวอักษร"}]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="เบอร์โทรศัพท์"
              name="phoneNumber"
              rules={[
                {len:10, message: "เบอร์โทรศัพท์ของคุณไม่ถูกต้อง"}
              ]}>
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              label="อีเมล์"
              name="email"
              rules={[
                {required:true, message: "คุณต้องกรอกช่องนี้"},
                {type: 'email' , message: "รูปแบบอีเมล์ของคุณไม่ถูกต้อง"}
              ]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={[
                {required:true, message: "คุณต้องใส่รหัสผ่านด้วย"},
                {min:12 , max:24, message: "รหัสผ่านของคุณต้องอยู่ระหว่าง 12-24 ตัว"}

              ]}>
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>

      </Row>
    </div>
  );
}

export default App;
