import { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import ToDoItem from "../components/ToDoItem";
import ToDoItemList from "../components/ToDoItemList";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      {/* <ToDoItem /> */}
      <ToDoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default Home;
