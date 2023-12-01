import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { ItemDetails } from "./components/Pages/ItemDetails/ItemDetails";
import { AllItems } from "./components/Pages/AllItems/AllItems";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technika" element={<AllItems />} />
      <Route path="/technika/:itemName" element={<ItemDetails />} />
      <Route path="/nerudnie_materiali" element={<AllItems />} />
      <Route path="/nerudnie_materiali/:itemName" element={<ItemDetails />} />
      <Route path="/uslugi" element={<AllItems />} />
      <Route path="/uslugi/:itemName" element={<ItemDetails />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contacts" element={<Home />} />
    </Routes>
  );
}

export default App;
