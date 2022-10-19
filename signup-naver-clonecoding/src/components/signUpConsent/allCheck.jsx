import { useEffect, useState } from "react";
import styled from "styled-components";
import { allCheck_Btn, allCheckDone_Btn } from "../../assets";
import ConsentJson from "../../docs/Consent";

const AllCheck = ({ lang, checked, allChecked }) => {
  const [allCheck, setAllCheck] = useState(allCheck_Btn);

  useEffect(() => {
    if (checked.reduce((acc, cur) => acc && cur, true)) {
      setAllCheck(allCheckDone_Btn);
    } else {
      setAllCheck(allCheck_Btn);
    }
  }, [checked]);

  const changeText = () => {
    if (lang == "kor") return ConsentJson.kor.allermit;
    else if (lang == "en") return ConsentJson.en.allermit;
    else if (lang == "cho") return ConsentJson.cho.allermit;
    else return ConsentJson.cht.allermit;
  };

  return (
    <Container onClick={allChecked}>
      <CheckBox src={allCheck} />
      <AllCheckContents>{changeText()}</AllCheckContents>
    </Container>
  );
};
export default AllCheck;

const Container = styled.div`
  display: flex;
  width: 460px;
  margin: auto;
  align-items: center;
  cursor: pointer;
`;
const CheckBox = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
`;
const AllCheckContents = styled.p`
  font-size: 14px;
  text-decoration: underline;
  font-weight: bolder;
`;
