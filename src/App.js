import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import About from './component/About/About';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
     <AuthProvider>
     <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/about' element={<PrivateRoute>
                <About></About>
              </PrivateRoute>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
