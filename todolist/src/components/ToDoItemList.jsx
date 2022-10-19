import ToDoItem from "./ToDoItem";
import PropType from "prop-types";

const ToDoItemList = ({ title, todoList, setTodoList }) => {
  console.log(title)
  console.log(todoList)
  console.log(setTodoList)
  return (
    <div className="list">
      <p className="list-tit">{title}</p>
      <ul className="list-ul">
        {todoList && // todoList가 있을때만 출력
          todoList.map((todoItem) => (
            // map을 이용하여 ToDoItem을 출력
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
      </ul>
    </div>
  );
};

ToDoItemList.PropType = {
  title: PropType.string.isRequired,
  todoList: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      text: PropType.string.isRequired,
    })
  ),
  setTodoList: PropType.func.isRequired,
};

export default ToDoItemList;
