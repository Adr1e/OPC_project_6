
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HommePage from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/AboutPage';
import AppartementPage from './Pages/AppartementsPage/Appartement';
import Error404 from './Pages/ErrorPage/Error404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HommePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Appartement/:id" element={<AppartementPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;
