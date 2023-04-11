

// const myTodos = [
//     { id: 1, description: "Create a new todo", completed: false },
//     { id: 2, description: "Update an existing todo", completed: false },
//     { id: 3, description: "Delete an existing todo", completed: false },
//   ];

//   const getNextId = ((id) => () => ++id)(3);

//   export { myTodos, getNextId }
import {v4 as uuidv4} from "uuid"
function Todos({input, setInput, todos, setTodos}){

  const onInputChange = (event) =>{
     setInput(event.target.value);
  };

  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
    setInput('');
  };
  return(
    <div className=" flex flex-col items-center text-center justify-center bg-fuchsia-50 px-12 py-8 mx-auto max-w-lg mt-4">
    <h1 className="text-center p-8 font-bold">Todo List</h1>
    <form onsubmit={onFormSubmit}
    className="flex items-center justice-center w-full  ">
        <div className="flex justify-center items-center pl-10">
            <input
            type="text"
             placeholder="Enter a todo"
             value={input}
             onChange={onInputChange}
             className=" roundend-lg bg-gray-50 border border-gray-300 p-2 mr-4 ml-4"/>
            <button type="submit" className="">Add</button>
        </div>
    </form>
</div>
  )
}
export default Todos;