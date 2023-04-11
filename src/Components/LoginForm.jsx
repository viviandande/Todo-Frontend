import { GiPadlock } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useState} from "react"

function LoginForm(){

    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({login}),
        })
        .then(response => response.json())
        .then((data) => console.log(data));
        setLogin({
            username: "",
            password: "",
        });
    }
    return(
        <div className="flex flex-row items-center text-center justify-center bg-fuchsia-50 px-12 py-8 mx-auto max-w-lg mt-4"
        >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight
                tracking-tight text-gray-900 md:text-2xl"
                >
                    Log into your account
                </h1>
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                    <div>
                        <label
                        htmlFor="username"
                        className="block mb-2 text-sm
                        font-medium text-gray-900"
                        >
                        Your Username
                        </label>
                        <div className="flex flex-row items-center">
                        <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                            <RiAccountCircleFill/>
                        </div>
                        <input
                        type="text"
                        name="username"
                         id="username"
                         value={login.username}
                         onChange={(e) =>setLogin((inputFields) =>({...inputFields, username: e.target.value}))}
                         className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "
                          placeholder="@dviv"
                           />
                    </div>
                    </div>


                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm
                        font-medium text-gray-900"
                        >Password
                        </label>
                        <div className="flex flex-row items-center"
                        >
                        <div className="py-2.5 mr-1 px-3 border border-black rounded-lg"
                        >
                            <GiPadlock/>
                        </div>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        value={login.password}
                        onChange={(e) =>setLogin((inputFields) =>({...inputFields, password: e.target.value}))}
                        className="bg-gray-50 border border-gray-300 text-gray-900
                         sm:text-sm rounded-lg focus:ring-primary-600 "
                         placeholder="********"
                         />
                    </div>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-teal-500 font-bold
                    text-gray-800 p-2 rounded-lg hover:bg-sky-500"
                    >
                    Login
                    </button>
                </form>
                <div>
                Don't have an account? <Link to="/sign-up"
                className="text-blue-500 underline"
                >
                Sign Up Here
                </Link>
                </div>
            </div>
          </div>
    )
}

export default LoginForm;