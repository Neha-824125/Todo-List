import React,{useState} from 'react'

const addTodo = ({onAdd}) => {
    const [newTodo,setnewTodo] = useState("");
  return (
    <div>
      <input type="text" placeholder="Enter Your Todo Here" value={newTodo} onChange={(e)=> setnewTodo(e.target.value)}
      />
      <button onClick={() => {
          let value = newTodo.trim();
          if(value){
              onAdd(value);
              setnewTodo("");
          }
      }}
      >
      Add    
      </button>
    </div>
  )
}

export default addTodo
