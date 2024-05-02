import React from "react";
import '../Styles/FirstPage.css'; 
import Logo from '../assets/RecipeRoundup.png'

function FirstPage(){
    return(
        <div className="background">
            <div className="logo-container">
                <img src={Logo} alt="logo" className="logo" />
            </div>
        </div>
    )
}

export default FirstPage;
