import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    height: number;
    diameter: number;
    standingPlace: string;
    wateringNeeds: string;
    photoURL: string;
  }
  


  useEffect(() => {
    
    fetch('https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=1&pageIndex=1')
      .then(response => response.json())
      .then(res => { 
        console.log(res)
        setProducts(res.products)
      })
      .catch(err => {
        setError(err)
      })
  }, []);



  return (
      <>
    <div className="App">
      <ul className='Product'>
        {
          products.map((product:Product) =>
          <li key={product.id}>
            <h2>{product.name}</h2>
            <h4>Beschrijving van product</h4>
            <p>{product.description}</p>
            <p>Prijs:{product.price}</p>
            <p>{product.height}</p>
            <p>{product.diameter}</p>
            <p>{product.standingPlace}</p>
            <p>{product.wateringNeeds}</p>
            <img src={product.photoURL} alt="plant" />
          </li>
          )
        }
      </ul>

   
      </div>









     
    </>
  );

}

export default App;
