import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Main Component
import FullPage from "./Components/FullPage/FullPage";

// Components
import QandaPage from "./Components/OtherPages/QandaPage/QandaPage";
import UserPage from "./Components/OtherPages/UserPage/UserPage";
import ActivationPage from "./Components/OtherPages/UserPage/ActivationPage/ActivationPage";
import CardPage from "./Components/OtherPages/UserPage/CardPage/CardPage";
import AboutUs from "./Components/OtherPages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/>}/>
        <Route path="/QandAPage" element={ <  QandaPage/>}/>
        <Route path="/UserPage" element={ <  UserPage/>}/>
        <Route path="/ActivationPage" element={ <  ActivationPage/>}/>
        <Route path="/CardPage" element={ <  CardPage/>}/>
        <Route path="/AboutUs" element={ <  AboutUs/>}/>

        {/* Redirect */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
