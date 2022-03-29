import './App.css';
import { Route, Routes} from 'react-router-dom'
import LandingPageComponent from './components/landingPage/LandingPageComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
