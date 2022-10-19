import { useRef, useState } from "react";
import PropTypes from "prop-types"; // propTypes란? => 매개변수의 타입을 지정해 줄 수 있게 해주는 라이브러리(타입스크립트랑 같은 역할)

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null); // 특정한 DOM을 선택할 수 있게 함
  //DOM이란? => jsx를 js가 이해할 수 있도록 Object로 변환하는 것

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      //concat이란? => 기존 배열을 토대로 새로운 배열이 리턴됨, 기존 배열은 변경 안됨
      //push는 기존 배열에 추가하는 것, 원본을 수정
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(nextTodoList);

    setText(""); //input창 초기화
    inputRef.current.focus(); //버튼 누르면 포커스 input창에 focus
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickAddButton(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="inputbox">
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef} //inputRef에 설정
        placeholder="할 일을 입력하세요"
        className="inputbox-inp"
        onChange={onChangeInput}
        onKeyPress={handleOnKeyPress}
      />
      <button
        type="submit"
        className="inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

InputBox.propTypes = {
  //PropTypes를 이용하여 타입을 강제함
  todoList: PropTypes.arrayOf(
    // todoList의 타입은 배열이어야 함
    PropTypes.shape({
      // todoList의 원소는 Object이어야 함
      // objectOf는 동일한 유형의 객체 //shape는 다른 유형의 객체
      id: PropTypes.number.isRequired, //id의 타입은 숫자 // isRequired => ㄴ값이 없거나, 잘못되었을 경우 - 콘솔창에서 오류 확인 가능
      text: PropTypes.string.isRequired, //text의 타입은 문자
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired, // setTodoList의 타입은 함수,
};

export default InputBox;
