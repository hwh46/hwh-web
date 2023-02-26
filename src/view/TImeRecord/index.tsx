import { useContext, useEffect, useState } from "react";
import { Thecontext } from "@/ThemeContext";
import styles from "./record.module.less";
import Calendar from "./Calendar";
import { getStrTime } from "@/utils/getStrTime";
import RecordView from "@/view/TImeRecord/Record";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getListAll } from "@/store/reducers/Record";

export default function TImeRecord() {
  const [time, setTime] = useState<string>(getStrTime(new Date()));
  const { lists } = useSelector((state: RootState) => state.recordList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getListAll());
  }, []);

  return (
    <div className={styles._}>
      <div className={styles.date_box}>
        <Calendar setTime={setTime} lists={lists!} />
        <div className={styles.record}>
          <RecordView time={time} lists={lists!} />
        </div>
      </div>
    </div>
  );
}
