import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import constant from "../../constants/en.json";

const { homeUrl, usersUrl } = constant.routes;
const { Header } = Layout;

const HeaderLayout = ({ action }) => {
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[action]}>
        <Menu.Item key='home'>
          <Link to={homeUrl}>Home</Link>
        </Menu.Item>
        <Menu.Item key='users'>
          <Link to={usersUrl}>Users</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderLayout;
