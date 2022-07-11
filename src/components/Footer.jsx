import React from "react";

let year = new Date().getFullYear();


function Footer(){
    return (
        <footer>
            <p>© {year} SageLDev</p>
        </footer>
    );
}

export default Footer;