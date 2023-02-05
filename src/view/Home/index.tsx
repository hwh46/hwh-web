import { useContext } from "react";
import { Thecontext } from "@/ThemeContext";
import styles from "./home.module.less";
import Calendar from "react-calendar";

export default function Home() {
  const { theme } = useContext(Thecontext);

  return (
    <div className={styles._} style={{ backgroundColor: theme }}>
      <div className={styles.date_box}>
        <div className={styles.date}>
          <Calendar
            className={styles.calendar}
            onChange={() => {
              console.log("点击了");
            }}
            // value={new Date()}
            locale={"en"}
            tileContent={({ activeStartDate, date, view }) => {
              console.log(activeStartDate, date, view);
              return (
                <div className={styles.tile_context}>
                  记录模块记录模块记录模块记录模块记录模块记录模块记录模块记录模块
                </div>
              );
            }}
          />
        </div>
        <div className={styles.record}>记录模块</div>
      </div>
    </div>
  );
}
