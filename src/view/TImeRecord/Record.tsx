import styles from "./home.module.less";
import { Input, message } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { RecordAll, updateRecord } from "@/api/record";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { getListAll, updateAsync } from "@/store/reducers/Record";

interface ViewProps {
  time: string;
  lists: RecordAll[];
}

export default function RecordView({ time, lists }: ViewProps) {
  const { TextArea } = Input;
  const [textValue, setTextValue] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    let timer: number;
    try {
      if (flag) {
        timer = setTimeout(async () => {
          const res = dispatch(updateAsync({ recordTime: time, description: textValue }));
          // message.success(res);
          // dispatch(getListAll());
          setFlag(false);
        }, 2000);
      }
    } catch (e: any) {
      message.error(e);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [flag, textValue]);

  useEffect(() => {
    if (lists) {
      const current = lists.find((item) => item.recordTime === time);
      if (current) {
        setTextValue(current.description);
      } else {
        setTextValue("");
      }
    }
  }, [time, lists]);

  const handle = (e: ChangeEvent<{ value: string }>) => {
    setTextValue(e.target.value);
    setFlag(true);
  };

  return (
    <>
      <div className={styles.header}>{time}</div>
      <div className={styles.content}>
        <TextArea
          value={textValue}
          onChange={handle}
          className={styles.text}
          placeholder={"输入想输入的哦"}
          autoSize={{ minRows: 10, maxRows: 10 }}
          bordered={false}
        />
      </div>
    </>
  );
}