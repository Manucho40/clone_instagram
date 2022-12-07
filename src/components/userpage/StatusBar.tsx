import axios from "axios";
import React, { useContext, useState } from "react"
import { FaAngleLeft, FaAngleRight, } from "react-icons/fa";
import Slider from "react-slick";
import imgStatus from "../../assets/img/profil.jpg"
import StatusViewContext from "../../context/StatusViewContext";
import { USER } from "../../data/UsersData";
import { user } from "../../helpers/types";

const StatusBar = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true
      };
      const contextView = useContext(StatusViewContext);
      const [dataUsers, setDataUsers] = useState<user[]>([]);
      useState(() => {
            setDataUsers([...USER])
      })

      const displayStatus = () => {
        contextView?.setShowStatus(true)
      }

    return ( 

        <>
        <div className="px-5 py-3 border-2 rounded-lg">
           
            <Slider {...settings}>
            {
                dataUsers.map(item => ( 
                <div key={item.id} className="px-2 cursor-pointer" onClick={displayStatus}>
                        <img className="imgStatus border-2  bg-gradient-to-r p-[2px] from-[#F5C33B] via-[#d6249f] to-[#fd5949]" src={item.profile_pic_url} alt="" />
                <p className="nameStatus">{item.username}</p>
            </div>))
            }
                
                
            </Slider>
        

        </div>
        </>

     );
}
 
export default StatusBar;