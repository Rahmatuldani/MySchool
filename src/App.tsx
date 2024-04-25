import { useSelector } from "react-redux";
import { selectAuth } from "./store/auth/selector";
import { UserType } from "./store/user/types";
import { Navigate, Routes } from "react-router-dom";
import AdminRoutes from "./routes/admin";
import TeacherRoutes from "./routes/teacher";
import StudentRoutes from "./routes/student";

function App() {
  const auth: UserType | null = useSelector(selectAuth);

  if (!auth) {
    return <Navigate to='/login' replace/>;
  }

  return (
    <Routes>
      {auth.role === 'Administrator' ? (
        AdminRoutes()
      ) : auth.role === 'Teacher' ? (
        TeacherRoutes()
      ) : (
        StudentRoutes()
      )}
    </Routes>
  );
}

export default App;