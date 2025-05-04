import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ItemPage from '../pages/ItemPage';
import CardPage from '../pages/CardPage';
import { fetchTypes, fetchItems } from '../http/itemAPI';

const AppRouter = () => {
  const [types, setTypes] = useState(null);
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedTypes = await fetchTypes();
        const fetchedItems = await fetchItems();
        setTypes(fetchedTypes);
        setItems(fetchedItems);
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

  if (!types?.rows || !items?.rows) {
    return <div>Не удалось загрузить данные</div>;
  }

  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />

      {types.rows.map(el => (
        <Route
          key={`items-${el.id}`}
          path={`items-${el.id}`}
          element={<ItemPage type={el.name} items={items} id={el.id} />}
        />
      ))}

      {items.rows.map(el => (
        <Route
          key={`item-${el.id}`}
          path={`item-${el.id}`}
          element={<CardPage id={el.id} />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
