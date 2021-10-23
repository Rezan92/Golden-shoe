import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import WomenShoes from './screens/WomenShoes';
import MenShoes from './screens/MenShoes';
import AllProducts from './screens/AllProducts';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '1500px', margin: 'auto' }}>
        <Header />
        <LoginScreen />
        <CartScreen />
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Route path='/w/product' component={WomenShoes} exact />
        <Route path='/m/product' component={MenShoes} exact />
        <Route path='/all/product' component={AllProducts} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
