import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import './assets/scss/main.scss'

import { Link, BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Alldetails from './components/Alldetails';
import Footer from './components/footer';
function App() {
  return (
   <div>
    
    <Routes >
    <Route path="/"  element={<Navbar/>} />
    <Route path="/productdetails/:productId" element={<ProductDetails/>} />
    <Route path="/allDetails/:detailsId" element={<Alldetails/>} />

</Routes>
<Footer/>
   </div>
  );
}

export default App;
