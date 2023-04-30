import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
            {/* <Route path={'/'} element={<HomeList/>}/>
            <Route path={'/add-property'} element={<AddPropertyScreen/>}/>
            <Route path={'/detail/:id'} element={<DetailsScreen/>}/> */}
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/sign-up'} element={<SignUp/>}/>
            <Route path={'/sign-in'} element={<SignIn/>}/>
        </Routes>
    </div>
  );
}

export default App;
