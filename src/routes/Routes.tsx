import { Routes, Route } from "react-router";

import Users from "../pages/Users";
// import Forms from "../pages/Forms";
import App from "../App";
import Layout from "../Layout/Layout";
import UserDetails from "../pages/UserDetailPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route
        path="/users/:id"
        element={<UserDetails/>}
      />
        {/* <Route path="/forms" element={<Forms />} /> */}
      </Route>
    </Routes>
  );
}