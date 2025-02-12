
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Dashboard from './components/dashboard/Dashboard';
import SignInPage from './pages/SignInPage';

function App() {


  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
