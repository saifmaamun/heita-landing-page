import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import TermsAndConditions from './pages/Terms/Terms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
            
            
         
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
