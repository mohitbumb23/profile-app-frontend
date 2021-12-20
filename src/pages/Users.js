import React, { useState, useEffect } from "react";
import { Table, Row, Col, Button, Space } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { columns } from "../constants/common";
import { getItems } from "../mockStorage";
import Header from "../components/Header";
import staticText from "../constants/en.json";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usersProfile = getItems(staticText.database);
    if (usersProfile?.length) {
      setUsersList(usersProfile);
    }
  }, []);

  const dataSource = usersList.map((profile) => {
    const key = profile.key || "";
    const row = {
      key: key,
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      email: profile.email || "",
      tagLine: profile.tagLine || "",
      company: profile.company || "",
      title: profile.title || "",
      startEndMonths: profile.startEndMonths || "",
      description: profile.description || "",
      skills: profile.skills || "",
      action: (
        <Space>
          <Button
            type='primary'
            onClick={() => navigate(`/edit-profile/${key}`)}>
            <EditOutlined />
          </Button>
          <Button
            span={1}
            type='primary'
            onClick={() => navigate(`/view-profile/${key}`)}>
            <EyeOutlined />
          </Button>
        </Space>
      ),
    };
    return row;
  });

  return (
    <>
      <Header action='users' />
      <Row style={{ marginTop: "15px" }}>
        {usersList?.length ? (
          <Col span={14} offset={4}>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={false}
            />
          </Col>
        ) : (
          <Col span={16} offset={8}>
            <h1>{staticText.no_data_found}</h1>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Users;
