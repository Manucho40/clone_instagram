import react, { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import statusImg from "../../assets/img/statusImg.jpg"
import StatusViewContext from "../../context/StatusViewContext";


const StatusModal = () => {

    const contextView = useContext(StatusViewContext);

    const displayStatus = () => {
        contextView?.setShowStatus(false)
      }
    return ( 
        <>
            <div className="w-full relative h-screen bg-[#1a1a1a]">
                <section className="flex justify-between p-2">
                    <div className="logo">
                        <img  src="https://static.cdninstagram.com/rsrc.php/v3/yl/r/RBjme8NQbl8.png" alt="" />
                    </div>
                    <div className="close text-white cursor-pointer" onClick={displayStatus}>
                        <FaRegWindowClose size={28}/>
                    </div>
                </section>
                <section className="blockCard">
                    <div className="statusCard">
                        {/* <img className="h- w-full" src={statusImg} alt="" /> */}
                        <h1 className="mt-10 font-medium">En cours de réalisation...</h1>
                    </div>
                </section>

            </div>
        </>
     );
}
 
export default StatusModal;