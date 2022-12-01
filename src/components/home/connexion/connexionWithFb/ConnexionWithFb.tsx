import React, {useContext} from "react";
import { Link } from "react-router-dom";
import instagram from "../../../../assets/img/instagram.png"
import profil from "../../../../assets/img/profil.jpg"
import ThemeContext from "../../../../context/ThemeContext";
const ConnexionWithFb = () => {
    const contextValue = useContext(ThemeContext);
    const handleContext = () => {
        contextValue?.updateSwitchConnexionMode(!contextValue.switchConnexionMode)
    }

    return (
        <>
        <div className="border-solid border-2 p-14 flex flex-col items-center" >
                <div className="col-span-8 sm:col-span-3">  
                    <img className="" src={instagram} alt="" />
                </div>            
                <div className="col-span-8 sm:col-span-3">  
                    <img className="profil" src={profil} alt="" />
                </div>            
                <div className="col-span-8 rounded mt-2 sm:col-span-3 bg-[#0095f6]">  
                    <Link to="/user" className="mt-1 text-center p-2 block w-64 h-8 border-gray-300 font-bold text-[#fff] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">Log In</Link>
                </div>
                <div className="mt-4 p-4 text-center">
                    <p>Not you? <a className="text-[#0095f6] cursor-pointer" onClick={handleContext}>Switch accounts</a></p>
                 </div>
            </div>
        </>
     );
}
 
export default ConnexionWithFb;