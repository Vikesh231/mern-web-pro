import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Add from './components/AddProducts';
import Product from './components/product';
import Update from './components/update';
// import {  useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
       <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Product/>}/>
        <Route path='/update/:id' element={<Update/> }/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/logout' element={<h1> logout components</h1>}/>
        <Route path='/profile' element={<h1> profile components</h1>}/>
        </Route>
        <Route path='/signup' element={ <SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/error' element={<Error/>}/>
       
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
