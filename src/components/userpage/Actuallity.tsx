import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { statusFriends } from "../../data/statusFriends";
import { statusFriend } from "../../helpers/types";
import ActuallityCard from "./ActuallityCard";
const Actuallity = () => {
 const [status, setStatus] = useState<statusFriend[] | null>(null)

 useEffect(() => {
    setStatus([...statusFriends])
 }, [])

    return ( 
        <>
            <div className="mt-5 ">
                {
                    status?.map((item, index) => <ActuallityCard key={index} statusData={item} />
                    )
                }
            </div>
        </>
     );
}
 
export default Actuallity;