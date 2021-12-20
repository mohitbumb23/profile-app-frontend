import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProfile from "../pages/ManageProfile";
import Users from "../pages/Users";
import constants from "../constants/en.json";

const { homeUrl, usersUrl } = constants.routes;

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={homeUrl} element={<ManageProfile />} />
        <Route path={usersUrl} element={<Users />} />
      </Routes>
    </Router>
  );
};

export default Routing;
