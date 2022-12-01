import React from "react";
import profil from "../../assets/img/profil.jpg"




const SuggestionBlock = () => {
    return ( 

        <>
        <div className="flex justify-between p-5">
           <div className="flex w-full">
               <div>
                  <img className="suggImg mr-4" src={profil} alt="" />
               </div>
               <div>
                  <p className="text-sm">davechap40</p>
                  <p className="text-sm text-gray-500">Ange Emmanuel</p>
               </div>
           </div>
           <div className="text-sm text-sky-500">
               <a href="">Switch</a>
           </div>
        </div>
        </>
     );
}
 
export default SuggestionBlock;