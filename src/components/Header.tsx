import React from "react";
import { FaCompass, FaFacebookMessenger, FaHome, FaRegHeart, FaRegPlusSquare } from "react-icons/fa";
import profil from "../assets/img/profil.jpg"
import logo from "../assets/img/instagram.png"
const Header = () => {
    return ( 
        <>
            <header className="border-b p-4 w-full bg-[#fff] z-10 h-16 fixed">
                <div className="max-w-4xl mx-auto my-0 flex justify-between">
                    <div>
                        <img className="h-10" src={logo} alt="" />
                    </div>
                    <div className="flex justify-between w-8/12	">
                        <div>
                        <input className="mt-1 block bg-gray-200 w-56 h-8 rounded-md focus:outline-none  shadow-sm sm:text-sm" type="text" />
                        </div> 
                        <div className="w-6/12 flex justify-between">
                            <button>
                                <FaHome size={28}/>
                            </button>
                            <button>
                                <FaFacebookMessenger size={28}/>
                            </button>
                            <button>
                                <FaRegPlusSquare size={28} />
                            </button>
                            <button>
                                <FaCompass size={28} />
                            </button>
                            <button>
                                <FaRegHeart size={28} />
                            </button>
                            <button>
                                <img className="profilUser" src={profil} alt="" />
                            </button>
                        </div> 
                    </div>

                </div>
            </header>
        </>
     );
}
 
export default Header;