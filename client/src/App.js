import { ParallaxProvider } from 'react-scroll-parallax';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar/Navbar';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchItems, fetchTypes } from './http/itemAPI';
function App() {
  const [types, setTypes] = useState()
  const [items, setItems] = useState([])
  const [load, setLoad] = useState(true)
  const [load2, setLoad2] = useState(true)
  useEffect(() => {
    fetchItems().then(data => setItems(data)).then(data => setLoad2(false))
    fetchTypes().then(data => setTypes(data)).then(data => setLoad(false))
  }, [])
  
  return (
    <>
    {load && load2 ? (
      <></>
    ):(
      <BrowserRouter>
        <Navbar />
        <AppRouter types={types} items={items}/>
      </BrowserRouter>
    )}
    </>
  );
}

export default App;
