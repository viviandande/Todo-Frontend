import NavBar from "./Navbar";
import LoginForm from "./LoginForm";
import todoimg from "../images/todoimg.png"
import Footer from "./Footer";


function LandingPage(){
    return(
        <div className="">
            <NavBar/>
            <div className="flex flex-row justify-between py-9 items-center ">
                <div className=" flex flex-col items-center">
                    <img src={todoimg} alt="todo-img"/>
                    <p className="p-4 font-bold overflow-wrap: break-word">Plan your time, day, month and all year round</p>
                </div>
            <LoginForm/>
            <Footer/>
            </div>
        </div>
    )
}

export default LandingPage;