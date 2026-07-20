import {
  Routes,
  Route,
} from "react-router-dom";

import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";

import AdminLogin from "../admin/pages/AdminLogin";
import Dashboard from "../admin/pages/Dashboard";

import AdminLayout from "../admin/components/AdminLayout";
import ProtectedRoute from "../admin/components/ProtectedRoute";

import ManageProfile from "../admin/pages/profile/ManageProfile";
import ManageAbout from "../admin/pages/about/ManageAbout";
import ManageEducation from "../admin/pages/education/ManageEducation";
import ManageSkills from "../admin/pages/skills/ManageSkills";
import ManageProjects from "../admin/pages/projects/ManageProjects";
import ManageCertificates from "../admin/pages/certificates/ManageCertificates";
import ManageCertifications from "../admin/pages/certifications/ManageCertifications";
import ManageResume from "../admin/pages/resume/ManageResume";
import ManageContact from "../admin/pages/contact/ManageContact";
import ManageSocialLinks from "../admin/pages/social/ManageSocialLinks";
import ManageMessages from "../admin/pages/messages/ManageMessages";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Portfolio />}
      />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="profile"
          element={<ManageProfile />}
        />

        <Route
          path="about"
          element={<ManageAbout />}
        />

        <Route
          path="education"
          element={<ManageEducation />}
        />

        <Route
          path="skills"
          element={<ManageSkills />}
        />

        <Route
          path="projects"
          element={<ManageProjects />}
        />

        <Route
          path="certificates"
          element={<ManageCertificates />}
        />

        <Route
          path="certifications"
          element={
            <ManageCertifications />
          }
        />

        <Route
          path="resume"
          element={<ManageResume />}
        />

        <Route
          path="contact"
          element={<ManageContact />}
        />

        <Route
          path="social"
          element={
            <ManageSocialLinks />
          }
        />

        <Route
          path="messages"
          element={<ManageMessages />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;