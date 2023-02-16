import { useContext, useEffect, useState } from "react";
import { Thecontext } from "@/ThemeContext";
import styles from "./home.module.less";
import Calendar from "react-calendar";
import { getRecordAll, RecordAll, updateRecord } from "@/api/record";
import { getStrTime } from "@/utils/getStrTime";
import TextArea from "antd/es/input/TextArea";

export default function Home() {
  const { theme } = useContext(Thecontext);
  const [lists, setList] = useState<RecordAll[]>();
  const [time, setTime] = useState<string>(getStrTime(new Date()));
  const [textValue, setTextValue] = useState<string>("");

  const RecordAll = async () => {
    const res = await getRecordAll();
    setList(res);
  };

  useEffect(() => {
    RecordAll();
  }, []);

  useEffect(() => {
    if (lists) {
      const content = lists.find((c) => c.recordTime === time);
      if (content) {
        setTextValue(content.description);
      } else {
        setTextValue("");
      }
    }
  }, [lists, time]);

  const update = async () => {
    await updateRecord({ recordTime: time, description: textValue });
    await RecordAll();
  };

  return (
    <div className={styles._} style={{ backgroundColor: theme }}>
      <div className={styles.date_box}>
        <div className={styles.date}>
          <Calendar
            className={styles.calendar}
            onChange={(time: Date) => setTime(getStrTime(time))}
            locale={"en"}
            tileContent={({ date }) => {
              const strTime = getStrTime(date);
              const content = lists && lists.find((c) => c.recordTime === strTime);
              return <div className={styles.tile_context}>{content && content.description}</div>;
            }}
          />
        </div>
        <div className={styles.record}>
          <div className={styles.header}>{getStrTime(new Date())}</div>
          <div className={styles.content}>
            <TextArea
              value={textValue}
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
              onBlur={update}
              className={styles.text}
              placeholder="输入想输入的哦"
              autoSize={{ minRows: 10, maxRows: 10 }}
              bordered={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
