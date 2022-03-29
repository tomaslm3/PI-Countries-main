import './App.css';
import { Route, Routes} from 'react-router-dom'
import LandingPageComponent from './components/landingPage/LandingPageComponent';
import HomeComponent from './components/home/HomeComponent';
import CountryDetailsComponent from './components/details/CountryDetailsComponent.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
        <Route exact path='/home' element={<HomeComponent/>} />
        <Route path='/country/:id' element={<CountryDetailsComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
