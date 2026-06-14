import { Routes, Route } from "react-router";

import Users from "../pages/Users";
import App from "../App";
import Layout from "../Layout/Layout";
import UserDetails from "../pages/UserDetailPage";
import HealthFormPage from "../pages/HealthFormPage";
import IncidentReportPage from "../pages/IncidentReportPage";
import FormPage from "../pages/FormPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/forms/health" element={<HealthFormPage />} />
        <Route path="/forms/incident" element={<IncidentReportPage />} />
      </Route>
    </Routes>
  );
}