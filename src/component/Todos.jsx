import React, { useEffect, useState } from 'react'
import { addTodo } from './addTodo'
import { Todo } from './Todo'

 const Todos = () => {
    const [todos,setTodos] = useState([]);
    const onAdd = (newTodo) => {
    setTodo([...todos,newTodo]);
    };

    const Deletetodo = (id) => {
    const newTodos = todos.filter((todos) => todo.id !== id);
    setTodos(newTodos)
    };

    const EditTodo = (newTodo) => {
      const newTodos = todos.map((todo) => {
      if(todo.id == newTodo.id) return newTodo;
      else return todo;
      });
      setTodos(newTodos);
    }
    useEffect(()=>{
      const getTodo = async () => {
        try{
        let res = await fetch(`https://localhost:3000/todos?_pages=${pageNumber}`)
        let data = await res.json();
        setTodos(data);
        }
        catch(e){
        console.log(e);
        }
      };
      getTodo();
    },[])
  return (
    <div>
      <addTodo onAdd={addTodo}/>
      {todos.map((todo)=>{
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
      })}
      <div>
      <button onClick={() => setPageNumber(pageNumber-1)}>Previous</button>
      <button onClick={() => setPageNumber(pageNumber+1)}>Next</button>
      </div>
    </div>
  )
}

export default Todos
