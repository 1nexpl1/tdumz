import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import CardGallery from '../components/CardGallery/CardGallery';
import CardDescription from '../components/CardDescription/CardDescription';
import CardButton from '../components/CardButton/CardButton';
import { fetchOneItem } from '../http/itemAPI';

const CardPage = () => {
  const { id } = useParams(); // получаем id из URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneItem(id)
      .then(itemData => {
        setData(itemData);
      })
      .catch(err => {
        console.error('Ошибка загрузки товара:', err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Загрузка товара...</div>;
  }

  if (!data) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Товар не найден</div>;
  }

  return (
    <div>
      <div className="cardWrapper">
        <CardGallery imag={data.images} />
        <CardDescription data={data} />
      </div>
      <CardButton />
      <Footer />
    </div>
  );
};

export default CardPage;
