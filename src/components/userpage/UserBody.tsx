import React from "react";
import Left from "./Left";
import Right from "./Right";
import SuggestionBlock from "./SuggestionBlock";



const UserBody = () => {
    return ( 
        <>
            <div className="max-w-4xl relative sm:left-36 mx-auto  top-10 px-10  flex justify-center">
                <Right />
                <Left />
            </div>
        </>
     );
}
 
export default UserBody;