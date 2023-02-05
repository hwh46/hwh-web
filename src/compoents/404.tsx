import ErrorImg from "@/assets/404.png";
import styles from "./error.module.less";
import { Button } from "antd";
export default function Wrong() {
  return (
    <div className={styles._}>
      <img src={ErrorImg} width={"50%"} />
      <div>
        <Button type="text" size="large" danger onClick={() => location.reload()}>
          刷新页面
        </Button>
      </div>
    </div>
  );
}
