import "./App.css"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom/dist';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
function App() {
  return <div>
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/account' element={<Login/>}/>
  </Routes>
  <Footer/>
</Router>
</div>
}

export default App;
