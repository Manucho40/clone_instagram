import React from "react";
import { FaCompass, FaFacebookMessenger, FaHome, FaRegHeart, FaRegPlusSquare, FaSearch } from "react-icons/fa";
import profil from "../assets/img/profil.jpg"
import logo from "../assets/img/instagram.png"
import { Link } from "react-router-dom";
const HeaderH = () => {
    return ( 
        <>
            <header className="border-b p-4  z-10 h-full w-2/12  fixed bg-[#fff] border-l-2">
                <div className="max-w-4xl flex flex-col justify-between">
                    <div className="m-4">
                        <Link to="/">
                            <img className="h-8" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="flex flex-col  justify-between">
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaHome size={28}/>
                                <span className="ml-2 relative top-1">Home</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaSearch size={28} />
                                <span className="ml-2 relative top-1">Search</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaCompass size={28} />
                                <span className="ml-2 relative top-1">Explore</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaFacebookMessenger size={28}/>
                                <span className="ml-2 relative top-1">Messages</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaRegHeart size={28} />
                                <span className="ml-2 relative top-1">Notifications</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <FaRegPlusSquare size={28} />
                                <span className="ml-2 relative top-1">Create</span>
                            </button>
                            <button className="flex w-10/12 rounded-full p-2 m-4 hover:bg-gray-100">
                                <img className="profilUser" src={profil} alt="" />
                                <span className="ml-2 relative top-1">Profile</span>
                            </button>
                    </div>

                </div>
            </header>
        </>
     );
}
 
export default HeaderH;