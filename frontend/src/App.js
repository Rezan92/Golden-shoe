import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '1500px', margin: 'auto' }}>
        <Header />
        <CartScreen />
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
