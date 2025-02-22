import HomeScreen from './pages/List'
import { useScreen } from './context/ScreenContext';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './Custom.css'

function App() {
  const { currentScreen } = useScreen()
  
  return (
    <>
    <Header/>
    <div className='min-h-[90vh]'>{currentScreen === 'list' ? <HomeScreen /> : <CartPage />}</div>
    <Footer/>
    </>
    
  );
}

export default App;
