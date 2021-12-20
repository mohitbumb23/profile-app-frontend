import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import staticText from "../../constants/en.json";

const { homeUrl, usersUrl } = staticText.routes;
const { Header } = Layout;

const HeaderLayout = ({ action }) => {
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[action]}>
        <Menu.Item key='home'>
          <Link to={homeUrl}>{staticText.home}</Link>
        </Menu.Item>
        <Menu.Item key='users'>
          <Link to={usersUrl}>{staticText.users}</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderLayout;
