import './App.css';
import ContactForm from './components/form';
import HomePage from './components/home';
import Navbar from './components/navbar';
import FAQComponent from './components/faq';
import Data from './components/data'
import { Routes,Route } from 'react-router-dom';

function App() {

   console.log("render")
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contracts' element={<Data/>}/>
        <Route path='/contact-us' element={<ContactForm/>}/>
        <Route path='/faq' element={<FAQComponent/>}/>
      </Routes>
    </div>
    

  );
}

export default App;
