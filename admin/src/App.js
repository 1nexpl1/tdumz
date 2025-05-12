import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { useState, useEffect } from 'react';
import { checkAuth } from './http/chackAuth';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const data = await checkAuth();  // Проверка авторизации
        setIsAuth(true);
      } catch (e) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    authCheck();
  }, []);

  if (loading) return <div>Загрузка...</div>;  // Пока идет загрузка

  return (
    <BrowserRouter>
      <AppRouter isAuth={isAuth} />  // Передаем isAuth в AppRouter
    </BrowserRouter>
  );
}

export default App;
