import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { AllMaterials } from "./components/Pages/AllMaterials/AllMaterials";
import { AllTechniks } from "./components/Pages/AllTechniks/AllTechniks";
import { ItemDetails } from "./components/Pages/ItemDetails/ItemDetails";
import { AllItems } from "./components/Pages/AllItems/AllItems";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technika" element={<AllItems />} />
      <Route path="/technika/:technikaName" element={<ItemDetails />} />
      <Route path="/nerudnie_materiali" element={<AllItems />} />
      <Route
        path="/nerudnie_materiali/:materialName"
        element={<ItemDetails />}
      />
      <Route path="/uslugi" element={<AllItems />} />
      <Route path="/uslugi/:uslugiName" element={<ItemDetails />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contacts" element={<Home />} />
    </Routes>
  );
}

export default App;
