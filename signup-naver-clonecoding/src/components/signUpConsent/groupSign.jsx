import styled from "styled-components";
import ConsentJson from "../../docs/Consent";

const GroupSignup = ({ lang }) => {
  const changeContent = () => {
    if (lang === "kor") return ConsentJson.kor.signUp.content;
    else return ConsentJson.en.signUp.content;
  };
  const changeLink = () => {
    if (lang === "kor") return ConsentJson.kor.signUp.link;
    else return ConsentJson.en.signUp.link;
  };

  return (
    <Container>
      <Content>{changeContent()}</Content>
      <GoPage
        onClick={() => {
          window.location =
            "https://nid.naver.com/user2/join/groupJoin?lang=ko_KR";
        }}
      >
        {changeLink()}
      </GoPage>
    </Container>
  );
};
export default GroupSignup;

const Container = styled.div`
  display: flex;
  width: 460px;
  margin: auto;
  justify-content: center;
`;
const Content = styled.p`
  font-size: 12px;
`;
const GoPage = styled.p`
  margin-left: 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
