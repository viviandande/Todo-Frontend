import { useState } from "react";
import { Link } from "react-router-dom"

function SignUpForm({setCurrentUser}){

    const [user, setUser] = useState("");
    //const [errors, setErrors] = useState("");

     function handleRegister(e){
        e.preventDefault();
        const user = {
            firstname: "",
            surname: "",
            username: "",
            newpassword: "",
            confirmPassword: ""
        }
        fetch(`/users`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
    //     .then(res =>{
    //         if(res.ok){
    //             res.json().then(setCurrentUser)
    //         }
    //         else{
    //             res.json().then(e => setErrors(Object.entries(e.error).flat()) )
    //         }
    //     })
     }
    return(
        <div className="flex flex-row items-center text-center justify-center bg-fuchsia-50 px-12 py-8 mx-auto max-w-lg mt-4 ">
            <div className="container mx-auto max-w-md p-8 sm:p-8">
                <h1 className="text-xl font-bold leading-tight pb-3
                tracking-tight text-gray-900 md:text-2xl">Create an account</h1>
                <form className="space-y-4 md:space-y-6 " onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="firstname" className="block mb-2 text-sm
                        font-medium text-gray-900">First Name</label>
                        <input
                         type="text"
                         id="firstname"
                         value={user.firstname}
                         onChange={(e) =>setUser((inputFields) =>({...inputFields, firstname: e.target.value}))}

                         className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "/>
                    </div>
                    <div>
                        <label htmlFor="surname" className="block mb-2 text-sm
                        font-medium text-gray-900">Surname</label>
                        <input
                        type="text"
                        id="surname"
                        value={user.surname}
                        onChange={(e) =>setUser((inputFields) =>({...inputFields, surname: e.target.value}))}
                        className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "/>
                    </div>
                    <div>
                        <label htmlFor="usernane" className="block mb-2 text-sm
                        font-medium text-gray-900">Username</label>
                        <input
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={(e) =>setUser((inputFields) =>({...inputFields, username: e.target.value}))}
                        className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "/>
                    </div>
                    <div>
                        <label htmlFor="newpassword" className="block mb-2 text-sm
                        font-medium text-gray-900">New Password</label>
                        <input
                        type="password"
                        id="newpassword"
                        value={user.newpassword}
                        onChange={(e) =>setUser((inputFields) =>({...inputFields, newpassword: e.target.value}))}
                        className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "/>
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className="block mb-2 text-sm
                        font-medium text-gray-900">Confirm Password</label>
                        <input
                         type="password"
                         id="confirmpassword"
                         value={user.confirmPassword}
                         onChange={(e) =>setUser((inputFields) =>({...inputFields, confirmPassword: e.target.value}))}
                         className="bg-gray-50 border border-gray-300
                          text-gray-900 sm:text-sm rounded-lg
                          focus:ring-primary-600 "/>
                    </div>
                    <button className="w-full bg-teal-500 font-bold
                    text-gray-800 p-2 rounded-lg hover:bg-sky-500">Sign Up</button>
                </form>
                <div >
                Have an account? <Link to="/login"
                className="text-blue-500 underline"
                >
                Login Here
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;