import Actuallity from "./Actuallity";
import StatusBar from "./StatusBar";

const Right = () => {
    
    return ( 
        <>
        <div className="barUser flex mr-2 flex-col w-7/12">
            <StatusBar />
            <Actuallity />
        </div>
        </>
     );
}
 
export default Right;