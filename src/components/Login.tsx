import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./login.module.less";
import { useState } from "react";
import { loginUser, registerUser } from "@/api/Login";
import { useNavigate } from "react-router";

interface formValue {
  name: string;
  password: string | number;
  ConfirmPassword?: string | number;
}

export default function Login() {
  const navigate = useNavigate();
  const [cut, setCut] = useState<boolean>(false);
  const onFinish = async (values: formValue) => {
    const { name, password } = values;
    if (cut) {
      const res = await registerUser({ name, password });
      message.success(res);
    } else {
      const res = await loginUser({ name, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
      }
      res && message.success("登录成功");
      const path = localStorage.getItem("redirectPathname");
      path && navigate(path);
    }
  };

  return (
    <div className={styles._}>
      <Form
        onFinish={onFinish}
        layout={"horizontal"}
        labelCol={{ span: 5 }}
        size={"large"}
        className={styles.login}
      >
        <Form.Item
          label={"用户名"}
          name="name"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label={"密码"}
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        {cut && (
          <Form.Item
            name={"ConfirmPassword"}
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("请确认密码"));
                },
              }),
            ]}
            label={"请确认密码"}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
        )}

        <div className={styles.button}>
          <Button type="primary" htmlType="submit">
            {cut ? "注册" : "登录"}
          </Button>
          <Button type="link" onClick={() => setCut(!cut)}>
            {cut ? "去登录" : "去注册"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
