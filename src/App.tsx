import { useDispatch, useSelector } from "react-redux";
import { UserType } from "./store/user/types";
import { selectAuth } from "./store/auth/selector";
import { Navigate } from "react-router-dom";
import { LogoutFunction } from "./store/auth/action";

function App() {
  document.body.className = 'nav-fixed';
  const auth: UserType | null = useSelector(selectAuth);
  const dispatch = useDispatch();

  if (!auth) return <Navigate to={"/login"} replace/>;
  if (auth) { return <Navigate to={`/${auth.role}`} replace/>; }

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