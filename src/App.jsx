import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { EdenTop } from "./components/EdenTop";


function App() {


  return (
    <>
      <BrowserRouter>
        <EdenTop />
        <AnimatedRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
