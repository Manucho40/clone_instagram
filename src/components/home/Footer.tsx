import React from "react";

const Footer = () => {
    return ( 
        <>
            <footer className="flex flex-col items-center mt-20">
                <div className="">
                    <a href="">Meta</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Jobs</a>
                    <a href="">Help</a>
                    <a href="">API</a>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                    <a href="">Top Accounts</a>
                    <a href="">Hashtags</a>
                    <a href="">Locations</a>
                    <a href="">Instagram Lite</a>
                    <a href="">Contact Uploading & Non-Users</a>
                </div>
                <div className="mt-2">
                    <select name="Language" id="">
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                    <a href="">© 2022 Instagram from Meta</a>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;