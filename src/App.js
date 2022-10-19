import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/navbar/Footer';
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import Login from "./components/pages/user/login";
import BarangMasuk from "./components/pages/logistik/barangMasuk";
import BarangKeluar from "./components/pages/logistik/barangKeluar";
import Inventory from "./components/pages/logistik/Inventory";
import RAP from './components/pages/RAP/RAP';
import Progress from './components/pages/RAP/Progress';

function App() {
  
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <Routes>

        <Route path="/Login" element={<Login />}></Route>

        {/* User */}
    
        {/* logistik */}
        <Route path="/Logistik/barangMasuk" element={<BarangMasuk />}></Route>
        <Route path="/Logistik/barangKeluar" element={<BarangKeluar />}></Route>
        <Route path="/Logistik/Inventory" element={<Inventory />}></Route>

        {/* RAP */}
        <Route path="/RAP/detailRAP" element={<RAP />}></Route>
        <Route path="/RAP/Progress" element={<Progress />}></Route>

        <Route path="/" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;