import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
// import {  useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<h1>Product list components</h1>}/>
        <Route path='/update' element={<h1> update Product list components</h1>}/>
        <Route path='/add' element={<h1>Add Product list components</h1>}/>
        <Route path='/logout' element={<h1> logout components</h1>}/>
        <Route path='/profile' element={<h1> profile components</h1>}/>
        <Route path='/signup' element={ <SignUp/>}/>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
