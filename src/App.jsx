import './styles/App.css';
import RootLayout from './components/RootLayout/Index';
import { Routes, Route } from 'react-router-dom';
import AboutMePage from './pages/AboutMe/index';
import $ from 'jquery';
import useBreakpoints from './hooks/useBreakpoints/index';

export default function App() {

  const active = useBreakpoints().active;

  $(document).ready(function() {

    if (active === "xs" || active === "sm") {
      // Добавить класс 'mobile' ко всем элементам
      $('*').addClass('mobile');
    } else {
    // Удалить класс 'mobile' от всех элементов
    $('*').removeClass('mobile');
  }
});
  
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
