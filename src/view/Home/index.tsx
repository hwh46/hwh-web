import { useContext, useEffect, useState } from "react";
import { Thecontext } from "@/ThemeContext";
import styles from "./home.module.less";
import Calendar from "./Calendar";
import { getRecordAll, RecordAll } from "@/api/record";
import { getStrTime } from "@/utils/getStrTime";
import RecordView from "@/view/Home/Record";

export default function Home() {
  const { theme } = useContext(Thecontext);
  const [lists, setList] = useState<RecordAll[]>();
  const [time, setTime] = useState<string>(getStrTime(new Date()));

  const RecordAll = async () => {
    const res = await getRecordAll();
    setList(res);
  };

  useEffect(() => {
    RecordAll();
  }, []);

  return (
    <div className={styles._} style={{ backgroundColor: theme }}>
      <div className={styles.date_box}>
        <Calendar setTime={setTime} lists={lists!} />
        <div className={styles.record}>
          <RecordView time={time} lists={lists!} RecordAll={RecordAll} />
        </div>
      </div>
    </div>
  );
}
