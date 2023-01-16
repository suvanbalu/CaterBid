import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import LoginWrap from './pages/Login/LoginWrap'
import CatererLogin from './pages/Login/CatererLogin'
import UserLogin from './pages/Login/UserLogin'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/login" element={<LoginWrap />} />
        <Route path="/CatererLogin" element={<CatererLogin /> } />
        <Route path="/UserLogin" element={<UserLogin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
