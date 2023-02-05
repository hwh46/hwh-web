import { useContext } from "react";
import { Thecontext } from "@/ThemeContext";
import styles from "./home.module.less";
import Calendar from "react-calendar";

export default function Home() {
  const { theme } = useContext(Thecontext);

  return (
    <div className={styles._} style={{ backgroundColor: theme }}>
      <Calendar
        onChange={() => {
          console.log("点击了");
        }}
        value={new Date()}
      />
    </div>
  );
}
