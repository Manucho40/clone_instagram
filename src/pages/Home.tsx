import React from "react";
import Footer from "../components/home/Footer";
import LeftSide from "../components/home/LeftSide";
import RightSide from "../components/home/RightSide";


const Home= () => {
    return ( 
        <>
            <div className="home">
                <div className="flex flex-col">
                    <div className="flex justify-center mt-6">
                        <LeftSide />
                        <RightSide />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
     );
}
 
export default Home;