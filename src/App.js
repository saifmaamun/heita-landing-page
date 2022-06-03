import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Steps from './component/Steps/Steps';
import AboutUs from './component/AboutUs/AboutUs';
import Why from './component/Why/Why';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Steps />
      <AboutUs />
      <Why />
      {/* <Contact /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
