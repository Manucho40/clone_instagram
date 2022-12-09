import react from "react";
import { FaRegWindowClose } from "react-icons/fa";
import statusImg from "../../assets/img/statusImg.jpg"


const StatusModal = () => {
    return ( 
        <>
            <div className="w-full relative h-screen bg-[#1a1a1a]">
                <section className="flex justify-between p-2">
                    <div className="logo">
                        <img  src="https://static.cdninstagram.com/rsrc.php/v3/yl/r/RBjme8NQbl8.png" alt="" />
                    </div>
                    <div className="close text-white">
                        <FaRegWindowClose size={28}/>
                    </div>
                </section>
                <section className="blockCard">
                    <div className="statusCard">
                        <img className="h- w-full" src={statusImg} alt="" />
                    </div>
                </section>

            </div>
        </>
     );
}
 
export default StatusModal;