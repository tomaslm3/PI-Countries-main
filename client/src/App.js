import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom'
import LandingPageComponent from './components/landingPage/LandingPageComponent';
import HomeComponent from './components/home/HomeComponent';
import CountryDetailsComponent from './components/details/CountryDetailsComponent.jsx';
import NavBarCompoment from './components/navBar/NavBarComponent';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBarCompoment />}
      <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
        <Route exact path='/home' element={<HomeComponent/>} />
        <Route path='/country/:id' element={<CountryDetailsComponent/>} />
        <Route path='/search/:name' />
      </Routes>
    </div>
  );
}

export default App;
