import './App.css';
import BaseContainerWrapper from './components/BaseContainerWrapper';
import BaseLandingInterface from './components/BaseLandingInterface';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Undefined from './components/Undefined';
import PsEditor from './PSEditor/PsEditor';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App"><BaseLandingInterface/></div>}/>
        <Route path="/home" element={<BaseContainerWrapper/>}/>
        <Route path="/pseditor" element={<PsEditor/>}/>
        <Route path="/*" element={<Undefined/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
