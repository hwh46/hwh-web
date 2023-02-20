import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RecordReducers from "@/store/reducers/Record";

// 整合所有的reducer
const rootReducer = combineReducers({
  recordList: RecordReducers.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const { setLists } = RecordReducers.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// 把所有的reducer内的action都统一导出
export { setLists };
export default store;
