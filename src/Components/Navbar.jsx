import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="bg-black p-4 items-center justify-between flex ">
            <span className="text-white text-4xl">Todo Organizer</span>
            <div>
                <ul className=" flex gap-4 text-blue-300 text-base ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/todo-list">Todo List</NavLink> 
                </ul>
            </div>
        </div>
    )
}

export default NavBar;