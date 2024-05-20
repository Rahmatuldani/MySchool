import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import usersReducer from "./user/reducer";
import teacherReducer from "./teacher/reducer";
import studentReducer from "./student/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    teachers: teacherReducer,
    students: studentReducer
});

export default rootReducer;