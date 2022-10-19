import { useState } from "react";
import styled from "styled-components";
import { langArrow } from "../../assets";

import ConsentJson from "../../docs/Consent";

const Lang = ({ lang, changeAllLang }) => {
  const [langValue, setLangValue] = useState("kor");
  const changeLang = () => {
    if (lang === "kor") return ConsentJson.kor.name;
    else if (lang === "en") return ConsentJson.en.name;
    else if (lang === "cho") return ConsentJson.cho.name;
    else return ConsentJson.cht.name;
  };

  const handleChange = (e) => {
    changeAllLang(e.target.value);
  };

  return (
    <Container>
      <CheckBox onChange={handleChange}>
        <option key="kor" value="kor">
          한국어
        </option>
        <option key="en" value="en">
          English
        </option>
        <option key="cho" value="cho">
          中文(简体)
        </option>
        <option key="cht" value="cht">
          中文(台灣)
        </option>
      </CheckBox>
    </Container>
  );
};

export default Lang;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CheckBox = styled.select`
  font-size: 12px;
  width: 95px;
  height: 30px;
  background-color: white;
  outline: 0;
  border: solid 1px #dadada;
  cursor: pointer;
  margin: 15px 0px;
`;

