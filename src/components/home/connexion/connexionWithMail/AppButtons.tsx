const AppButtons = () => {
    return ( 
        <div className="mt-4 text-center">
            <span className="">Get the app</span>
            <div className="flex justify-around mt-4">
                <img className="w-32 h-10" src={require("../../../../assets/img/google.png")} alt="" />
                <img className="w-32 h-10" src={require("../../../../assets/img/microsoft.png")} alt="" />
            </div>
        </div>
     );
}
 
export default  AppButtons;