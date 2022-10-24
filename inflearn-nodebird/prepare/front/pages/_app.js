import propTypes from "prop-types";
import "antd/dist/antd.css";

const NodeBird = ({ Components }) => {
  return <Components />;
};

NodeBird.propTypes = {
  Components: propTypes.elementType.isRequired,
};

export default NodeBird;