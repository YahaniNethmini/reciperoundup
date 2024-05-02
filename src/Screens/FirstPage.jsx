import React from "react";
import '../Styles/FirstPage.css'; 
import Logo from '../assets/RecipeRoundup.png'

function FirstPage(){
    return(
        <div>
            <div className="logo-container">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="background">
                <div class="text-animation-container">
                    <h1>... Welcome to RecipeRoundup ...</h1>
                </div>
                <div className="log">
                <h3>
                    Already Have an Account, LogIn : <br />
                    <button className="button1">LogIn</button>
                </h3>
                <h3>
                    Doesn't Have an Account, SignUp : <br />
                    <button className="button2">SignUp</button>
                </h3>
                </div>
            </div>

        </div>
    )
}

export default FirstPage;
