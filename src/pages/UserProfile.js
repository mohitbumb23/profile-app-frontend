import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row } from "antd";

import { getItems } from "../mockStorage/index";
import Header from "../components/Header";
import staticText from "../constants/en.json";

const Profile = () => {
  const [profile, setProfile] = useState("");

  const location = useLocation();
  const params = useParams();
  const pathname = location.pathname || "";

  useEffect(() => {
    if (pathname.indexOf(staticText.view_url) !== -1) {
      const key = params.id;
      const profiles = getItems(staticText.database);
      const getProfile = profiles?.find(
        (profile) => String(profile.key) === String(key)
      );
      getProfile ? setProfile(getProfile) : setProfile("");
    }
  }, [pathname, params]);

  return (
    <>
      <Header action="profile" />
      <Row style={{ marginTop: "30px" }}>
        <Col span={16} offset={8}>
          <table>
            <tbody>
              <tr>
                <th>{staticText.first_name}</th>
                <td>{profile.firstName || ""}</td>
              </tr>
              <tr>
                <th>{staticText.last_name}</th>
                <td>{profile.lastName || ""}</td>
              </tr>
              <tr>
                <th>{staticText.email}</th>
                <td>{profile.email || ""}</td>
              </tr>
              <tr>
                <th>{staticText.tag_line}</th>
                <td>{profile.tagLine || ""}</td>
              </tr>
              <tr>
                <th>{staticText.company}</th>
                <td>{profile.company || ""}</td>
              </tr>
              <tr>
                <th>{staticText.title_or_role}</th>
                <td>{profile.title || ""}</td>
              </tr>
              <tr>
                <th>{staticText.start_or_end_month}</th>
                <td>{profile.startEndMonths || ""}</td>
              </tr>
              <tr>
                <th>{staticText.description}</th>
                <td>{profile.description || ""}</td>
              </tr>
              <tr>
                <th>{staticText.skills}</th>
                <td>{profile.skills || ""}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
