import Header from './components/Header';
import Home from './screens/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ maxWidth: '1500px', margin: 'auto' }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
