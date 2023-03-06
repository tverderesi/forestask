import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return <div>Welcome Admin!</div>;
};

const StudentHome = () => {
  return <div>Welcome Student!</div>;
};

const TeacherHome = () => {
  return <div>Welcome Teacher!</div>;
};

const AppHome = () => {
  return (
    <div>
      <h1>App Home</h1>
      <Outlet />
    </div>
  );
};

export default AppHome;
export { AdminHome, StudentHome, TeacherHome };
