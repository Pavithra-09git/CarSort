import React from "react";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      {/* You can add a header here if needed */}
      <Outlet /> {/* This renders Home or CardDetailPage */}
    </div>
  );
}

export default App;
