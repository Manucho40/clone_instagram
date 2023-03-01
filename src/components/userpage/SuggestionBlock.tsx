import React from "react";
import profil from "../../assets/img/profil.jpg"
import imgStatus from "../../assets/img/profil.jpg"




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
        <div className="flex justify-between px-5 pt-3">
           <div className="flex">
               <p className="text-sm text-gray-400 font-medium">Suggestions For You</p>
           </div>
           <div className="text-sm text-sky-500">
               <button className="">See All</button>
           </div>
        </div>
        <div className="flex justify-between px-5 pt-3">
           <div className="flex">
               <img className="imgSuggest mr-2" src={imgStatus} alt="" />
               <div>
                    <p className="text-xs font-bold">angelyanezhgrc</p>
                    <span className="text-xs font-extralight">Follow by astro.wlrd</span>
               </div>
           </div>
           <div className="text-sm text-sky-500">
               <button className="font-medium mt-2">Follow</button>
           </div>
        </div>
        <div className="flex justify-between px-5 pt-3">
           <div className="flex">
               <img className="imgSuggest mr-2" src={imgStatus} alt="" />
               <div>
                    <p className="text-xs font-bold">angelyanezhgrc</p>
                    <span className="text-xs font-extralight">Follow by astro.wlrd</span>
               </div>
           </div>
           <div className="text-sm text-sky-500">
               <button className="font-medium mt-2">Follow</button>
           </div>
        </div>
        <div className="flex justify-between px-5 pt-3">
           <div className="flex">
               <img className="imgSuggest mr-2" src={imgStatus} alt="" />
               <div>
                    <p className="text-xs font-bold">angelyanezhgrc</p>
                    <span className="text-xs font-extralight">Follow by astro.wlrd</span>
               </div>
           </div>
           <div className="text-sm text-sky-500">
               <button className="font-medium mt-2">Follow</button>
           </div>
        </div>
        <div className="flex justify-between px-5 pt-3">
           <div className="flex">
               <img className="imgSuggest mr-2" src={imgStatus} alt="" />
               <div>
                    <p className="text-xs font-bold">angelyanezhgrc</p>
                    <span className="text-xs font-extralight">Follow by astro.wlrd</span>
               </div>
           </div>
           <div className="text-sm text-sky-500">
               <button className="font-medium mt-2">Follow</button>
           </div>
        </div>
        </>
     );
}
 
export default SuggestionBlock;