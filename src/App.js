import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Emailjs from './components/Emailjs'


function App() {
  return (
    <>
    {/* <Navbar title="Textutiles" about="About us"/> */}
    <div className="container my-3">
      {/* <TextForm heading="Enter text to analyze"/> */}
    {/* <About/> */}
    <Emailjs/>
    </div>

    </>
  );
}

export default App;
