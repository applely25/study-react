import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="index">
          <Link href="/">
            <a>노드 버드</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="search">
          <SearchInput enterButton />
        </Menu.Item>

        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* gutter : colum간의 간격을 준다  합쳐서 100%가 되도록 */}
      <Row gutter={8}>
        {/* xs : 모바일   sm : 테블릿    md : 작은 데스크탑   lg, xl : 대화면  
          xs < sm < md < lg < xl < lg < xxl
        */}
        {/* xs={n}  : 24칸중 n칸을 사용  ex) md={12} 24칸중 12칸차지 */}
        {/* 만약 md가 6이고, 그 다음 md가 12 즉 더했을때 24가 안넘어가면 가로로 만들어짐, 만약 24가 넘어가면 세로로 배치됨 */}
        <Col xs={24} md={6}>
          {isLogedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/applely25"
            target="_blank_"
            rel="noreffer noopener"
          >
            Made by Applely25
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired, //return 안에 들어갈 수 있는 모든 것 -> node //타입이 node임
};

export default AppLayout;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
