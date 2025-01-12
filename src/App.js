import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './context';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomeScreen from './assets/screen/HomeScreen';
import AboutScreen from './assets/screen/AboutScreen';
import ContactScreen from './assets/screen/ContactScreen';
import SingleCocktailScreen from './assets/screen/SingleCocktailScreen';
import ErrorScreen from './assets/screen/ErrorScreen';
import Footer from './components/Footer';
import MenuScreen from './assets/screen/MenuScreen';
function App() {

  
  return (

    <Router className='app'>

      <NavBar />
      <SideBar />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contattaci' element={<ContactScreen />} />
        <Route path='/cocktail/:id' element={<SingleCocktailScreen />} />
        <Route path='/menu' element={<MenuScreen />} />
        <Route path='/*' element={<ErrorScreen />} />
      </Routes>

      <Footer />
      
    </Router>





  );
}

export default App;
