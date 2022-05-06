import React,{useState}from 'react'
import styles from './todo.module.css'
const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditable, setisEditable] = useState(false);
  const [value,setValue] = useState(todo.value)

  const EditTodo = async () => {
    await fetch(`https://localhost:3000/todos/${todo.id}`,{
      method: "PATCH",
      headers : {"content-type" : "application/json"},
      body: JSON.stringify({
        value,
        completed: true,
      }),
    });
    onDelete(todo.id);
  }
  const Deletetodo = async () => {
  await fetch(`https://localhost:3000/todos/${todo.id}`,{
    method: "DELETE",
    headers : {"content-type" : "application/json"},
  });
  onDelete(todo.id);
  }
  return (
    <div className={`${styles.flex}${todo.completed ? styles.lineThrough : ""}`}
    >
    {isEditable ? (
      <div>
      <input type="text" placeholder="Enter Your Todo Here" value={newTodo} onChange={(e)=> setnewTodo(e.target.value)}
      />
      <button onClick={() => {
          let v = newTodo.trim();
          if(v){
            onAdd(v);
            setnewTodo("");
          }
        }}
>
        Update    
</button>
      </div>
    ):     <div>{todo.value}</div>
    }
    <div>
    <button onClick={EditTodo}>Edit</button>
    <button onClick={Deletetodo}>Delete</button>
    </div>
    </div>
  )
}

export default Todo
