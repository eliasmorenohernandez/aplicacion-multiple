/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 24/06/2023 - 14:50:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
const TodoItem = ({ todo, removeTodo, updateTodo, index }) => {
  return (
    <li className="p-4 flex gap-2 rounded-lg bg-slate-200 shadow-sm">
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={({ target }) => updateTodo(index, target.value)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;