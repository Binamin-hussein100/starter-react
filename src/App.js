import './App.css';
import ContactForm from './components/form';
import HomePage from './components/home';
import Navbar from './components/navbar';
import FAQComponent from './components/faq';
import Data from './components/data'
function App() {

   console.log("render")
  return (
    <div>
      <Navbar/>
      <Data/>
    </div>
    

  );
}

export default App;
