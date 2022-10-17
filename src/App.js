import './App.css';
import Footer from './components/navbar/Footer';
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
