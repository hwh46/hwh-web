import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecordAll, RecordAll, updateRecord, UpdateRecordProps } from "@/api/record";

interface StateProp {
  lists: RecordAll[] | [];
}

const initialState: StateProp = {
  lists: [],
};

export const getListAll = createAsyncThunk<RecordAll[]>("records/all", async (_, store) => {
  const res = await getRecordAll();
  return res;
});

export const updateAsync = createAsyncThunk<string, UpdateRecordProps>(
  "records/update",
  async (data, store) => {
    const res = await updateRecord(data);
    return res;
  }
);

const RecordReducers = createSlice({
  name: "record",
  initialState,
  reducers: {
    setLists(state, action) {
      state.lists = action.payload;
    },
  },
  // 异步的thunk
  extraReducers: (builder) => {
    builder.addCase(getListAll.fulfilled, (state, action) => {
      console.log(action.payload);
      state.lists = action.payload;
    });
    builder.addCase(getListAll.pending, (state, action) => {
      // console.log("请求中", action);
    });
    builder.addCase(getListAll.rejected, (state, action) => {
      // console.log("请求出错", action);
    });
    builder.addCase(updateAsync.fulfilled, (state, action) => {
      const { payload } = action;
      const res = state.lists.map((list) => {
        if (list.id === payload.id) {
          return payload;
        }
        return list;
      });
      console.log(res);
      state.lists = res;
    });
  },
});

export default RecordReducers;
