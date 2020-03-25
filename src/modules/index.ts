import { combineReducers } from "redux";
import move from "./move";



const rootReducer = combineReducers({
    move
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
