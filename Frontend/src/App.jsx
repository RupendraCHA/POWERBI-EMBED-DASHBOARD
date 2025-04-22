import React, { useEffect } from "react";
import PowerBIReport from "./PowerBIReport";
import axios from "axios"

function App() {

  let url = "https://powerbi-embed-dashboard-backend.onrender.com"

  const startTheServer = async () => {
    const response = await axios.get(url);
    console.log(response.data.message);
  };

  useEffect(() => {
    startTheServer()
  },[])
  return (
    <div className="App">
      <PowerBIReport />
    </div>
  );
}

export default App;
