import { Route, Routes } from 'react-router';
import './App.css';
import { Slidebar } from './Components/common/Slidebar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/ServicesPage/Services';
import Contact from './Components/Contact';
import Projects from './Components/ProjectsPage/Projects'
function App() {
  return (
    <div className='main-container'>

      <Slidebar></Slidebar>
      <div className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
  </div>
    </div>
  );
}

export default App;
