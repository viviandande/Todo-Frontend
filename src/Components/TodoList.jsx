import { BiEdit } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { RiCheckboxCircleLine } from "react-icons/ri"
import Todos from "./Todos"
import React, { useState} from "react"


function TodoList(){
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null);

    const handleDelete = ({id}) =>{
        setTodos(todos.filter((todo) =>todo.id === id))
    }

    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id){
                    return {...item, completed: item.completed}
                }
                return item;
            })
        );
    };
    return(
             <div>
                <Todos
             input={input}
             setInput={setInput}
             todos={todos}
             setTodos={setTodos}
             editTodo={editTodo}
             setEditTodo={setEditTodo}
             />
                {todos.map((todo) =>(
                    <li className="list-items" key={todo.id}>
                        <input
                        type="text"
                        value={todo.title}
                        onChange={(event) => event.preventDefault()}
                        className=""
                        />
                        <div>
                            <button className="" onClick={() => handleComplete(todo)}><RiCheckboxCircleLine/></button>
                            <button><BiEdit/></button>
                            <button className="" onClick={() => handleDelete(todo)}><RiDeleteBin6Line/></button>
                        </div>
                    </li>

                ))};
             </div>
    )
}

export default TodoList;

// import React, { useState } from "react";
// import { myTodos, getNextId } from './Todos'

// /*
// Rules of state: never mutate state directly!

// Todo Deliverables:
// - Add element to array
// - Remove element to array
// - Update element in array
// */

// function TodoList() {
// //   const [todos, setTodos] = useState([]);

// // //   const [newTodoDescription, setNewTodoDescription] = useState("");

// //     console.log(todos)

// //   function addTodo(e) {
// //     e.preventDefault();
// //     const newTodo = {
// //     //   id: getNextId(),
// //     //   description: newTodoDescription,
// //     //   completed: false,
// //     };
// //     // console.log("createTodo", newTodo);
// //   }

// //
// // flex items-center justice-center w-full
// // "text-center p-8
// // flex flex-row items-center justify-between
// // text-center p-8
// // "roundend-lg bg-gray-50 border border-gray-300 p-2 mr-4 ml-4"

//   return (
//     <div className="px-6 py-8 mx-auto md:h-screen lg:py-0 w-full bg-fuchsia-50 px-12 py-8 mx-auto lg:py-0 w-full rounded-lg shadow md:mt-32 sm:max-w-md xl:p-0">
//       <h2 className="text-center p-8 font-bold">Add Todos</h2>
//       <form
//       className="ml-5">
//         <div className="">
//         <label>
//           Description:
//           <input
//             type="text"
//             // value={newTodoDescription}
//             onChange={(e) => (e.target.value)}
//           className=""/>
//         </label>
//         <input type="submit" value="Add todo" />
//         </div>
//       </form>
//       <div className="mt-20">
//         <h2 className="text-center">My Todos</h2>
//         <ul className="ml-5 ">
//          {todos.map((todo) => (
//           <li key={todo.id} className="flex flex-row items-center gap-3">
//             <strong>{todo.description}</strong>
//             <label>
//               Completed?
//               <input
//                 type="checkbox"
//                 onChange={(e) => console.log(todo.id, e.target.checked)}
//                 checked={todo.completed}
//               />
//             </label>
//             <button>Update</button>
//             <button>Delete</button>

//           </li>
//         ))}
//       </ul>
//      </div>
//     </div>
//   );
// }

// export default TodoList;