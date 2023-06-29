/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 24/06/2023 - 14:49:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useState } from "react";

const useTodo = () => {
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...list, { text: todo, done: false }]);
  };

  const removeTodo = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const updateTodo = (index, checked) => {
    console.log(checked);
    setList(
      list.map((todo, i) => {
        if (i === index) {
          return { ...todo, done: checked === "on" };
        }
        return todo;
      })
    );
  };

  return {
    list,
    addTodo,
    removeTodo,
    updateTodo,
  };
};

export default useTodo;