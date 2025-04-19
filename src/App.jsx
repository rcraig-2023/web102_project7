import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCrewmate from "./CreateCrewmate"; // Corrected path
import SummaryPage from "./SummaryPage"; // Corrected path
import DetailPage from "./DetailPage"; // Corrected path
import EditCrewmate from "./EditCrewmate"; // Corrected path
import { supabase } from "./supabaseClient";

console.log(supabase);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
      </Routes>
    </Router>
  );
}

export default App;
