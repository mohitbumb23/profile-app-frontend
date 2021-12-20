import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProfile from "../pages/ManageProfile";
import Users from "../pages/Users";
import UserProfile from "../pages/UserProfile";
import constants from "../constants/en.json";

const { homeUrl, usersUrl, updateUrl, profileUrl } = constants.routes;

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={homeUrl} element={<ManageProfile />} />
        <Route path={usersUrl} element={<Users />} />
        <Route path={updateUrl} element={<ManageProfile />} />
        <Route path={profileUrl} element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default Routing;
