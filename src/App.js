import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import Select from './Components/Elements/Select';
function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
    <Route index path='home' element={<Home/>} />
    <Route index path='select' element={<Select/>} />


   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
