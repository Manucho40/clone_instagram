import React, { useContext } from "react";
import Header from "../components/Header";
import HeaderH from "../components/HeaderH";
import StatusBar from "../components/userpage/StatusBar";
import StatusModal from "../components/userpage/StatusModal";
import UserBody from "../components/userpage/UserBody";
import StatusViewContext from "../context/StatusViewContext";

const UserPage = () => {
  const contextView = useContext(StatusViewContext);
    return ( 
        <>
            {
              contextView?.showStatus ? (
                <StatusModal />
              ) :
              (
                <div className="flex justify-between bg-[#fafafa]">
                    <HeaderH />
                    <UserBody />
                </div>
  
              )
            }
        </>
     );
}
 
export default UserPage;
