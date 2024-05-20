import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectAuthRole } from "./store/auth/selector";
import { Navigate } from "react-router-dom";
import { LogoutFunction } from "./store/auth/action";
import { TeacherType } from "./store/teacher/types";
import { StudentType } from "./store/student/types";
import { StaffType } from "./store/staff/types";

function App() {
  document.body.className = 'nav-fixed';
  const auth: TeacherType | StudentType | StaffType | null = useSelector(selectAuth);
  const role: string = useSelector(selectAuthRole) as string;
  const dispatch = useDispatch();

  if (!auth) return <Navigate to={"/login"} replace/>;
  if (auth) {     
    return <Navigate to={`/${role}`} replace/>; 
  }

  function handleLogout() {
    LogoutFunction(dispatch);
  }

  return (
    <>
      App Page
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;