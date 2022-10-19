import PropType from "prop-types";

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id == todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        className="item-checkbox"
        checked={todoItem.checked} //체크 구분을 위해 넣어줌
        onChange={onChangeCheckbox} //변화가 생기면 체크
      />
      <span className="item-ctx">{todoItem.text}</span>
      <button className="item-edit-btn">🖋️</button>
      <button className="item-delete-btn">🗑️</button>
    </div>
  );
};

ToDoItem.propType = {
  todoItem: PropType.shape({
    id: PropType.number,
    text: PropType.string.isRequired,
  }),
  todoList: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      text: PropType.string.isRequired,
    })
  ),
  setTodoList: PropType.func.isRequired,
};

export default ToDoItem;
