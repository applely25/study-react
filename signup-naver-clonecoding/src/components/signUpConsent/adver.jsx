import { useEffect, useState } from "react";
import styled from "styled-components";
import { check_Btn, checkDone_Btn } from "../../assets";
import ConsentJson from "../../docs/Consent";

const Adver = ({ checked, number, lang, changeChecked }) => {
  const [checks, setChecks] = useState(check_Btn);

  useEffect(() => {
    if (checked[number]) {
      setChecks(checkDone_Btn);
    } else {
      setChecks(check_Btn);
    }
  }, [checked]);

  const changeTitle = () => {
    if (lang === "kor") return ConsentJson.kor.adver.title;
    else if (lang === "en") return ConsentJson.en.adver.title;
    else if (lang === "cho") return ConsentJson.cho.adver.title;
    else return ConsentJson.cht.adver.title;
  };

  const changeContent = () => {
    if (lang === "kor") return ConsentJson.kor.adver.content;
    else if (lang === "en") return ConsentJson.en.adver.content;
    else if (lang === "cho") return ConsentJson.cho.adver.content;
    else return ConsentJson.cht.adver.content;
  };

  const click = () => {
    changeChecked(number);
  };
  return (
    <Container>
      <Title onClick={click}>
        <CheckBox src={checks} />
        <CheckContents>{changeTitle()}</CheckContents>
      </Title>
      <Content>{changeContent()}</Content>
    </Container>
  );
};

export default Adver;

const Container = styled.div`
  margin: auto;
  width: 460px;
  margin-top: 25px;
  margin-bottom: 30px;
`;
const Title = styled.div`
  display: flex;
  cursor: pointer;
`;
const CheckBox = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const CheckContents = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const Content = styled.p`
  font-size: 12px;
`;
