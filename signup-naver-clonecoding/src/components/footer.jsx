import styled from "styled-components";
import { naverLogo } from "../assets";

const Footer = () => {
  return (
    <Container>
      <Logo />
      <p>Copyright</p>
      <NaverCrop
        onClick={() => {
          window.open("https://www.navercorp.com/");
        }}
      >
        NAVER Crop.
      </NaverCrop>
      <p>All Rights Reserved.</p>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  & p {
    font-size: 10px;
    color: #333333;
    margin: 0px 5px 0px 0px;
  }
  width: 460px;
  height: 47.2px;
  margin: auto;
  padding: 18px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Logo = styled.img.attrs({
  src: `${naverLogo}`,
})`
  height: 12px;
  margin-right: 5px;
`;

const NaverCrop = styled.p`
  cursor: pointer;
  font-weight: bold;
  color: #666666;
  &:hover {
    color: #2db400;
    text-decoration: underline;
  }
`;
