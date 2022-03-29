import './App.css';
import { Route, Routes} from 'react-router-dom'
import LandingPageComponent from './components/landingPage/LandingPageComponent';
import HomeComponent from './components/home/HomeComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
        <Route exact path='/home' element={<HomeComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
