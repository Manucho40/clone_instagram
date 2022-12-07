import React, {useContext} from "react";

import {FaFacebookSquare} from "react-icons/fa"
import { Link } from "react-router-dom";
import ThemeContext from "../../../../context/ThemeContext";


const FormBox = () => {
    const contextValue = useContext(ThemeContext);
    const handleContext = () => {
        contextValue?.updateSwitchConnexionMode(!contextValue.switchConnexionMode)
    }
    
    return ( 
        <div className="border-solid border-2 p-12 flex flex-col items-center" >
            <div className="mb-4">
                <img className="w-40" src={require("../../../../assets/img/instagram.png")} alt="" />
            </div>
            <form action="" className="">
                <div className="col-span-8 sm:col-span-3">  
                    <input type="text" name="first-name" id="first-name" placeholder="Phone number, username, email" autoComplete="given-name" className="mt-1 p-2 block border focus:outline-none w-64 h-8 shadow-sm sm:text-sm" />
                </div>
                <div className="col-span-8 sm:col-span-3">  
                    <input type="password" name="Password" id="Password" placeholder="Password" autoComplete="given-name" className="mt-1 p-2 block focus:outline-none w-64 border h-8 shadow-sm  sm:text-sm" />
                </div>
                <div className="col-span-8 rounded  sm:col-span-3 bg-[#0095f6]">  
                    <Link to="/user" className="mt-1 text-center p-2 block w-64 h-8 border-gray-300 font-bold text-[#fff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">Log In</Link>
                </div>
                <div className="col-span-8 mt-4 flex justify-between sm:col-span-3 text-[#fff]"> 
                    <div className="vide"></div>
                    <span className="relative bottom-3 text-[#000]">OR</span>
                    <div className="vide"></div>
                </div>

            </form>
            <div className="col-span-8 flex sm:col-span-3 justify-center text-[#0095f6]">
                    <FaFacebookSquare size={20}/>
                    <button onClick={handleContext}  className="relative left-2 bottom-1 cursor-pointer">Log in with Facebook</button>
            </div>
            <div className="col-span-8 mt-2 flex sm:col-span-3 justify-center">
                    <button className="text-xs">Forgot pasword?</button>
            </div>

        </div>
     );
}
 
export default FormBox;