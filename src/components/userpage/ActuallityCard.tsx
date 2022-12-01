import React, { FC } from "react"
import actuallityImg from "../../assets/img/profil.jpg"
import { FaRegBookmark, FaRegComment, FaRegGrinAlt, FaRegHeart, FaRegPaperPlane, FaTelegramPlane } from "react-icons/fa"
import { statusFriend } from "../../helpers/types"


type Props = {
    statusData: statusFriend
}

const ActuallityCard: FC<Props> = ({statusData}) => {
    const formatDate= (date: Date) =>{
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    return ( 
        <>
            <div className="flex flex-col mb-5 border-2 rounded-lg">
                <div className="flex m-3 items-center  justify-between">
                    <div>
                        <div className="flex">
                            <img className="actuallityImg mr-3" src={statusData.friend.profile_pic_url} alt="" />
                            <span>{statusData.friend.username}</span>
                        </div>
                    </div>
                    <div>
                        <h1>...</h1>
                    </div>
                </div>
                <div className="w-full">
                    <img className="imgActu" src={statusData.status.img} alt="" />
                </div>
                <div className="flex m-2 justify-between">
                    <div>
                        <button className="mr-2">
                            <FaRegHeart size={28} />
                        </button>
                        <button className="mr-2">
                            <FaRegComment size={28} />
                        </button>
                        <button className="mr-2">
                            <FaRegPaperPlane size={28} />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FaRegBookmark size={28} />
                        </button>
                    </div>
                </div>
                <div className="ml-2">
                    <span>11 likes</span>
                </div>
                <div className="ml-2">
                    <p><span className="font-bold">angelyanezhgrc</span> {statusData.status.message}🥵🎆</p>
                </div>
                <div className="ml-2">
                    <span>{formatDate(statusData.status.date)} </span>
                    <span>See translation</span>
                </div>
                <div className="flex items-center mx-3 my-2 justify-between">
                    <div>
                        <button className="mr-2 mt-1">
                            <FaRegGrinAlt size={34} />
                        </button>
                    </div>
                    <div className="w-full">
                       <input placeholder="Add a comment..." className="w-full h-8 bg-[#fafafa] focus:outline-none" type="text" />
                    </div>
                    <div>
                        <a className="text-sm font-semibold text-blue-500" href="">Post</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ActuallityCard;