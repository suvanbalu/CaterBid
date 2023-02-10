import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import LoginWrap from './pages/Login/LoginWrap'
import CatererLogin from './pages/Login/CatererLogin'
import AboutUs from './pages/aboutus/AboutUs'
// import Profile from './pages/User/Profile'
import NotFound from './pages/NotFound'
import HowItWorks from './pages/HowItWorks'
import HowItWorksCaterer from './pages/HowItWorksCaterer'
import Profile1 from './pages/User/profile1'
import UserSignUp from './pages/SignUp/UserSignUp'
import CatererPage1 from './pages/SignUp/CatererPage1';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<UserSignUp/>}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/HowItWorks" element={<HowItWorks />}/>
        <Route path="/HowItWorksCaterer" element={<HowItWorksCaterer />}/>
        <Route path="/login" element={<LoginWrap />} />
        <Route path="/CatererLogin" element={<CatererLogin /> }/>
        <Route path="/CatererPage1" element={<CatererPage1 />}/>
        {/* <Route path="/User" element={<Profile1 /> } /> */}
        <Route path="/CUser/:cid" element={<Profile1 /> } />
      <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
