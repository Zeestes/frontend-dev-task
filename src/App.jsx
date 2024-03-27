import './styles/App.css';
import RootLayout from './components/RootLayout/Index';
import { Routes, Route } from 'react-router-dom';
import AboutMePage from './pages/AboutMe/index';

export default function App() {
  return (
    <div className="App">
      <RootLayout>
        <Routes>
          <Route exact path="/" element={<AboutMePage />} />
          <Route exact path="/aboutme" element={<AboutMePage />} />
        </Routes>
      </RootLayout>
    </div>
  );
}
