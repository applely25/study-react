import propTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head"; //head를 변경하기 위해서는 추가를 해줘야함
import AppLayout from "../components/AppLayout";
import { Fragment } from "react";

//_app.js에 적용하면 모든 페이지에 공통적으로 적용됨
const NodeBird = ({ Component }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>

      <AppLayout>
        <Component />
      </AppLayout>
    </Fragment>
  );
};

NodeBird.propTypes = {
  Components: propTypes.elementType.isRequired,
};

export default NodeBird;
