import styled from "styled-components";
import ConsentJson from "../../docs/Consent";

//btn.cancle  btn.confirm
const Button = ({ goNext, lang }) => {
  const checkAll = () => {
    if (!goNext()) {
      alert("동의해주세요") ////만들기
    } else {
      window.location =
        "https://nid.naver.com/user2/V2Join?token_sjoin=nXNIbZl5Bf4HbIf0&langSelect=ko_KR";
    }
  };
  const changeBtnCancle = () => {
    if (lang === "kor") return ConsentJson.kor.btn.cancle;
    else if (lang === "en") return ConsentJson.en.btn.cancle;
    else if (lang === "cho") return ConsentJson.cho.btn.cancle;
    else return ConsentJson.cht.btn.cancle;
  };
  const changeBtnConfirm = () => {
    if (lang === "kor") return ConsentJson.kor.btn.confirm;
    else if (lang === "en") return ConsentJson.en.btn.confirm;
    else if (lang === "cho") return ConsentJson.cho.btn.confirm;
    else return ConsentJson.cht.btn.confirm;
  };
  return (
    <Btn>
      <GoButton
        onClick={() => {
          window.location = "https://naver.com";
        }}
      >
        {changeBtnCancle()}
      </GoButton>
      <GoButton onClick={() => checkAll()}>{changeBtnConfirm()}</GoButton>
    </Btn>
  );
};
export default Button;
const Btn = styled.div`
  width: 460px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;
const GoButton = styled.button`
  :first-child {
    background-color: #8e8e8e;
  }
  :last-child {
    background-color: #03c75a;
  }
  cursor: pointer;
  border: none;
  width: 225px;
  height: 50px;
  font-size: 18px;
  color: white;
`;
