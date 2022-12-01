import React, { useEffect, useRef, useState } from "react";
import screen1 from "../../assets/img/screen1.png"
import screen2 from "../../assets/img/screen2.png"
import screen3 from "../../assets/img/screen3.png"
import screen4 from "../../assets/img/screen4.png"


const LeftSide = () => {
    //Initialisation de mon state comportant mes differentes images
    const [currentImg, setCurrentImg] = useState<string>(screen1)
    const [imgPhone, setImgPhone] = useState<string[]>([
        screen1,
        screen2,
        screen3,
        screen4,
    ])

    //Initialisation du useRef qui va me permettre de selectionner la balise img
    // const changeImg = useRef<HTMLImageElement>();

    const imgFunc = () => {
        for(let i = 0; i < imgPhone.length ;i++){
            setTimeout(function(){
                //Le problème
                setCurrentImg(imgPhone[i])
            }, i * 2000)
       }
    }

    useEffect(() => {
        setInterval(imgFunc, 8000)
    }, [])

    return ( 
        <>
            <div className="cacheImg relative">
                <img className="img1" src={require("../../assets/img/phone.png")} alt="" />
                <img  className="img2 ease-in-out" src={currentImg} alt="" />
            </div>
        </>
     );
}
 
export default LeftSide;