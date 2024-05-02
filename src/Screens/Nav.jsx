import React from "react";
import Home from "../assets/home.png"

function Nav(){
    return(
        <div>
            <table>
                <tr>
                    <td><img src={Home} alt="Home"/></td>
                </tr>
            </table>
        </div>
    )
}

export default Nav;