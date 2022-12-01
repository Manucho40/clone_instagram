import React from "react";
import Header from "../components/Header";
import HeaderH from "../components/HeaderH";
import UserBody from "../components/userpage/UserBody";

const UserPage = () => {
    return ( 
        <>
          <div className="flex justify-between bg-[#fafafa]">
              <HeaderH />
              <UserBody />
          </div>
        </>
     );
}
 
export default UserPage;
