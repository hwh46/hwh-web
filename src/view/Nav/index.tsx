import styles from "./index.module.less";
import { ReactComponent as Logo } from "@/icon/react.svg";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import avatarImg from "@/assets/avatar.png";
import { SkinOutlined } from "@ant-design/icons";

import { useContext } from "react";
import { Thecontext } from "@/ThemeContext";
import { Color, mainColor, navColor } from "@/module/themeColor";

export default function Nav() {
  const { setTheme, theme } = useContext(Thecontext);
  const popoverContent = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {mainColor.map((item) => (
          <div
            key={item}
            style={{ width: "40px", height: "40px", backgroundColor: item }}
            onClick={() => setTheme(item)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.nav} style={{ backgroundColor: navColor[theme as Color] }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", position: "relative" }}>
        <Logo style={{ height: "100%", marginTop: 10, marginLeft: 15 }} />
        <div className={styles.control}>
          <Popover content={popoverContent} title="主题颜色" trigger="click">
            <SkinOutlined style={{ fontSize: 30, lineHeight: 1.6 }} />
          </Popover>

          <Avatar
            className={styles.avatar}
            src={avatarImg}
            size={"large"}
            icon={<UserOutlined />}
          />
        </div>
      </div>
    </div>
  );
}
