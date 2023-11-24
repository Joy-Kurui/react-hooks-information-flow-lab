import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    // <div className={"App " + }>
      <div className={"App" +isDarkMode ? "dark" : "light"}>
      <ShoppingList items={itemData}  />
      <Header onDarkModeClick={onDarkModeClick}/>
    </div>
  );
}

export default App;
