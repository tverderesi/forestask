import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AdminHome from "./AdminHome";
import NotFound from "./NotFound";
import StudentHome from "./StudentHome";
import TeacherHome from "./TeacherHome";

const AppHome = () => {
  const { user } = useContext(AuthContext) as any;

  switch (true) {
    case user.privilegeLevel === "ADMIN":
      return <AdminHome />;
    case user.privilegeLevel === "TEACHER":
      return <TeacherHome />;
    case user.privilegelLevel === "STUDENT":
      return <StudentHome />;
    default:
      return <NotFound />;
  }
};

export default AppHome;
export { TeacherHome };
