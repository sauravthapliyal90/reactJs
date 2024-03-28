import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './Context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todos) => {
    setTodos((prev) => [{ id: Date.now(), ...todos }, ...prev])
  }

  const updateTodo = (id, todos) => {
    setTodos((prev) => prev.map((val) => val.id === id ? todos : val))
  }

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((val) => val.id !== id))
  }

  const toggoleCompelete = (id) => {
    setTodos((pre) => pre.map((val) => val.id === id ? { ...val, completed: !val.completed } : val))
  }

  useEffect(() =>{
    const todos =  JSON.parse(localStorage.getItem("todos"));
    if (todos  && todos.length > 0) {
      setTodos(todos);
    }
  },[])

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{ todos, updateTodo, addTodo, toggoleCompelete, deleteTodo }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
