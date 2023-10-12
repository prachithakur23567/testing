

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css"
import MainCode from "./MainCode";
import Open from "./Open";
import Check from "./Check";
import SignUp from "./SignUp";
import { UserContext } from "./UserContext";



function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value="hiii">
        <Routes>
          <Route path="/" element={<MainCode />} />
          <Route path="/open" element={<Open />} />
          <Route path="/check" element={<Check />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
