import React, { useState } from "react";

function Header ({onDarkModeClick,isDarkMode}){
return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick} className={isDarkMode ? "dark" : "light"}>
        {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
)
}
export default Header