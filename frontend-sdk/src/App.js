import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import LoginWrap from './pages/Login/LoginWrap'
import CatererLogin from './pages/Login/CatererLogin'
import AboutUs from './pages/aboutus/AboutUs'
import NotFound from './pages/NotFound'
import HowItWorks from './pages/HowItWorks'
import HowItWorksCaterer from './pages/HowItWorksCaterer'
import Profile1 from './pages/User/profile1'
import CatPage from './pages/SignUp/CatPage';
import UserSignUpMain from './pages/SignUp/UserSignUpMain'
import ProfileUserMain from './pages/User/ProfileUserMain';
import CatererHome from './pages/User/catererHome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/SignUp" element={<UserSignUp/>}/> */}
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/HowItWorks" element={<HowItWorks />}/>
        <Route path="/HowItWorksCaterer" element={<HowItWorksCaterer />}/>
        <Route path="/login" element={<LoginWrap />} />
        <Route path="/CatererLogin" element={<CatererLogin /> }/>
        <Route path="/CatPage" element ={<CatPage/>}/>
        <Route path="/UserSignUpMain" element = {<UserSignUpMain/>}/>
        <Route path ="/ProfileUser/:id" element = {<ProfileUserMain/>}/>
        <Route path ="/ProfileUserMain/:id" element = {<ProfileUserMain/>}/>



        {/* <Route path="/User" element={<Profile1 /> } /> */}
        <Route path="/CUser/:cid" element={<Profile1 /> } />
        <Route path = "/CHome/:cid" element ={<CatererHome/>}/>
      <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
