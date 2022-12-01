import React, {useState, useContext} from "react"
import ThemeContext from "../../context/ThemeContext";
import ConnexionWithFb from "./connexion/connexionWithFb/ConnexionWithFb";
import ConnexionWithMail from "./connexion/connexionWithMail/ConnexionWithMail";

const RightSide = () => {
    const contextValue = useContext(ThemeContext);

    return ( 
        <>
            <div className="coWithMail m-4 flex flex-col justify-center">
                {
                  (contextValue?.switchConnexionMode) ?
                    (
                        <ConnexionWithMail />
                    )
                    :
                    (
                        <ConnexionWithFb />
                    )
                }
            </div>
        </>
     );
}
 
export default RightSide;