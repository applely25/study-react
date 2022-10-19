import styled from "styled-components";

import { naverLogo } from "../assets";
import Adver from "../components/signUpConsent/adver";
import AllCheck from "../components/signUpConsent/allCheck";
import Checks from "../components/signUpConsent/Checks";
import Lang from "../components/signUpConsent/lang";
import ChecksBtn from "../components/signUpConsent/ChecksBtn";
import { useEffect, useState } from "react";
import Button from "../components/signUpConsent/button";
import GroupSignup from "../components/signUpConsent/groupSign";
import Footer from "../components/footer";

const Consent = () => {
  const [checked, setChecked] = useState([false, false, false, false]);
  const [langChoose, setLangChoose] = useState("kor");

  const changeChecked = (num) => {
    let newChecked = [...checked];
    newChecked[num] = !newChecked[num];
    setChecked(newChecked);
  };

  const allChecked = () => {
    if (checked.reduce((acc, cur) => acc && cur, true)) {
      setChecked([false, false, false, false]);
    } else {
      setChecked([true, true, true, true]);
    }
  };

  const changeAllLang = (allLang) => {
    setLangChoose(allLang);
  };

  const goNext = () => {
    if (checked[0] && checked[1] && checked[2] === true) {
      window.location = "https://naver.com";
      return true;
    } else return false;
  };

  return (
    <All>
      <Container>
        <Lang lang={langChoose} changeAllLang={changeAllLang} />
        <NaverLogo
          onClick={() => {
            window.location = "https://naver.com";
          }}
        />
        <AllCheck allChecked={allChecked} checked={checked} lang={langChoose} />
        <Checks
          number={0}
          changeChecked={changeChecked}
          checked={checked}
          lang={langChoose}
        />
        <ChecksBtn
          number={1}
          changeChecked={changeChecked}
          checked={checked}
          lang={langChoose}
        />
        <Checks
          number={2}
          changeChecked={changeChecked}
          checked={checked}
          lang={langChoose}
        />
        <Adver
          number={3}
          changeChecked={changeChecked}
          checked={checked}
          lang={langChoose}
        />
        <Button goNext={goNext} lang={langChoose}/>
        <GroupSignup lang={langChoose}/>
      </Container>
      <Footer/>
    </All>
  );
};

export default Consent;
const All = styled.div`
  background-color: #f5f6f7;
  height: 1000px;
`;
const Container = styled.div`
  width: 768px;
  margin: auto;
`;

const NaverLogo = styled.img.attrs({
  src: `${naverLogo}`,
})`
  height: 44px;
  display: flex;
  margin: auto;
  margin-bottom: 40px;
  cursor: pointer;
`;
