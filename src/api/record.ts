import request from "./requet";

const GET_RCORD_ALL = "/getRecords";

export interface RecordAll {
  id: number;
  description: string;
  recordTime: string;
}

export async function getRecordAll() {
  const result = await request.get<RecordAll[]>(GET_RCORD_ALL);
  return result.data;
}

export interface UpdateRecordProps {
  description: string;
  recordTime: string;
}

const UPDATE_RECORD = "/updateRecord";
export async function updateRecord(data: UpdateRecordProps) {
  const result = await request.post(UPDATE_RECORD, data);
  return result.data;
}
