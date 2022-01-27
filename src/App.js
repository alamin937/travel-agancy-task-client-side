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
import DashBoard from './component/DashBoard/DashBoard/DashBoard';
import AllBlogs from './component/DashBoard/AllBlogs/AllBlogs';
import AddAdmin from './component/DashBoard/AddAdmin/AddAdmin';
import AddBlogs from './component/DashBoard/AddBlogs/AddBlogs';
import AddExperience from './component/AddExperience/AddExperience';
import ShowExperi from './component/ShowExperi/ShowExperi';
import Update from './component/Update/Update';

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
              <Route path='/update/:updateId' element={<Update></Update>}></Route>
              <Route path='/experience' element={<PrivateRoute><AddExperience></AddExperience></PrivateRoute>}></Route>
              <Route path='/experience/:experiId' element={<ShowExperi></ShowExperi>}></Route>
              <Route path='/dashboard' element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}>
                <Route path='/dashboard' element={<AllBlogs></AllBlogs>}></Route>
                <Route path='/dashboard/addadmin' element={<AddAdmin></AddAdmin>}></Route>
                <Route path='/dashboard/addblogs' element={<AddBlogs></AddBlogs>}></Route>
              </Route>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
