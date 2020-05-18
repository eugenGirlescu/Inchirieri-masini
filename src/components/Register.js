import React from 'react';
import './Register.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Register extends React.Component {
  render() {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div className = "img">
        <div className ="main-form">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <h1>Register</h1>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item><br/>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item><br/>
              <Form.Item
                label="Email"
                name="email"
                label="E-mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item><br/>
        
              <Form.Item
              name="password"
              label="Password"
              label="Password"
              rules={[
                {
                  min:8,
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item><br/>
              
              <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  min:8,
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item><br/>
        
              <Form.Item {...tailLayout}>
              
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
          
          <div class="lh-copy mt3">
          <Link to = '/login' class="f6 link dim black db">Log in</Link>
          </div>
                </Form.Item>
            </Form>
        </div>
      </div>
    );
  };
}


export default Register;
