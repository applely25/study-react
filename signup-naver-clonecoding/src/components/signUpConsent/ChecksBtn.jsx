import { useEffect, useState } from "react";
import styled from "styled-components";
import { check_Btn, checkDone_Btn } from "../../assets";
import ConsentJson from "../../docs/Consent";

const Checks = ({ checked, number, lang, changeChecked }) => {
  const [checks, setChecks] = useState(check_Btn);

  useEffect(() => {
    if (checked[number]) {
      setChecks(checkDone_Btn);
    } else {
      setChecks(check_Btn);
    }
  }, [checked]);

  const changeText = () => {
    if (lang === "kor") return ConsentJson.kor.permits[number].title;
    else if (lang === "en") return ConsentJson.en.permits[number].title;
    else if (lang === "cho") return ConsentJson.cho.permits[number].title;
    else return ConsentJson.cht.permits[number].title;
  };

  const changeContent = () => {
    if (lang === "kor") return ConsentJson.kor.permits[number].content;
    else if (lang === "en") return ConsentJson.en.permits[number].content;
    else if (lang === "cho") return ConsentJson.cho.permits[number].content;
    else return ConsentJson.cht.permits[number].content;
  };

  const changeButton = () => {
    if (lang === "kor") return ConsentJson.kor.permits[number].buttonContent;
    else return "나중에..지우자";
  };
  const click = () => {
    changeChecked(number);
  };

  return (
    <Container>
      <Title>
        <Check onClick={click}>
          <CheckBox src={checks} />
          <AllCheckContents> {changeText()} </AllCheckContents>
        </Check>
        {/*//////////////////////////////////////*/}
        <ChildGoBtn
          onClick={() => {
            window.location = "https://nid.naver.com/user2/V2Join?m=kidGuide";
          }}
        >
          {changeButton()}
        </ChildGoBtn>
        {/*//////////////////////////////////////*/}
      </Title>

      <Content>
        <pre>{changeContent()}</pre>
      </Content>
    </Container>
  );
};

export default Checks;
const Container = styled.div`
  margin: auto;
  width: 460px;
  margin-top: 25px;
  margin-bottom: 30px;
`;
const Title = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;
const Check = styled.div`
  display: flex;
`;
const CheckBox = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const AllCheckContents = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const Content = styled.div`
  height: 88px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1px 15px;
  margin-top: 10px;
  border: 1px solid #dadada;
  background-color: white;
  & pre {
    display: block;
    white-space: pre-wrap;
    font-size: 12px;
  }
`;

const ChildGoBtn = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid #08a600;
  color: #08a600;
  font-size: 12px;
  width: 94px;
  height: 30px;
`;
