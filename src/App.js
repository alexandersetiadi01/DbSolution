import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/navbar/Footer';
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import Login from "./components/pages/user/login";
import BarangMasuk from "./components/pages/logistik/barangMasuk";
import BarangKeluar from "./components/pages/logistik/barangKeluar";
import Inventory from "./components/pages/logistik/Inventory";
import Progress from './components/pages/RAP/Progress';
import Proyek from './components/pages/user/Proyek'
import MasterBarang from './components/pages/Master/masterBarang';
import CodeMaster from './components/pages/Master/codeMaster';
import CodeDetail from './components/pages/Master/codeDetail';
import MasterRAP from './components/pages/RAP/masterRAP';
import DetailRAP from './components/pages/RAP/detailRAP';

function LoginLayout (){
  return (
    <div className="login-wrapper" style={{
      position:'absolute',
      top:'0px',
      right:'0px',
      bottom:'0px',
      left:'0px',
      
    }}>
      <Outlet />
    </div>
  )
}

function AppLayout(){
  return(
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

function App() {
  
  return (
    <div className="wrapper">
      <Routes>

        {/* User */}
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />}></Route>
          <Route path='/proyek' element={<Proyek />}></Route>
        </Route>


        <Route path='/dashboard' element={<AppLayout />}>
          <Route index element={<BarangMasuk />}></Route>

          {/* master */}
          <Route path="Master/masterBarang" element={<MasterBarang />}></Route>
          <Route path="Master/codeMaster" element={<CodeMaster />}></Route>
          <Route path="Master/codeDetail" element={<CodeDetail />}></Route>

          {/* logistik */}
          <Route path="Logistik/barangMasuk" element={<BarangMasuk />}></Route>
          <Route path="Logistik/barangKeluar" element={<BarangKeluar />}></Route>
          <Route path="Logistik/Inventory" element={<Inventory />}></Route>

          {/* RAP */}
          <Route path="RAP/masterRAP" element={<MasterRAP />}></Route>
          <Route path="RAP/detailRAP" element={<DetailRAP />}></Route>
          <Route path="RAP/Progress" element={<Progress />}></Route>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;