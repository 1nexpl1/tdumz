import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ItemPage from '../pages/ItemPage';
import CardPage from '../pages/CardPage';
import { fetchTypes, fetchItems } from '../http/itemAPI';

const AppRouter = () => {
  const [types, setTypes] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedTypes = await fetchTypes();
        const fetchedItems = await fetchItems();
        setTypes(fetchedTypes.rows || []);
        setItems(fetchedItems.rows || []);
      } catch (e) {
        console.error('Ошибка загрузки данных:', e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/items/:id/:type" element={<ItemPage items={items} />} />
      <Route path="/item/:id" element={<CardPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
