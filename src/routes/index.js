import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProfile from "../pages/ManageProfile";
import constants from "../constants/en.json";

const { homeUrl } = constants.routes;

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={homeUrl} element={<ManageProfile />} />
      </Routes>
    </Router>
  );
};

export default Routing;
