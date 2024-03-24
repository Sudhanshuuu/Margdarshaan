import React from "react";
import Page from "./pages/Page";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Page />
    </BrowserRouter>
    </div>
  );
}

export default App;
