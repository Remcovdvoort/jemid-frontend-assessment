import { useEffect, useState } from "react";
import "./App.css";
import annie from "./img/Anniee.png";
import SearchBar from "./components/SearchBar";

function App() {
  const [plants, setPlants] = useState([]);
  // const [error, setError] = useState({});

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    height: number;
    diameter: number;
    standingPlace: string;
    wateringNeeds: string;
    photoUrl: string;
  }

  useEffect(() => {
    fetch(
      "https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=10&pageIndex=0"
    )
      .then((response) => response.json())
      .then((res) => {
        setPlants(res.products);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="App">
        <header>
          
          <img className="Annie" src={annie} alt="" />
          <SearchBar />
        </header>

        <main>
          <div className="container">
            <div className="product-grid">
              {plants.map((plant: Product) => (
                <div className="card stacked" key={plant.id}>
                  <img
                    className="card__img"
                    src={plant.photoUrl}
                    alt={plant.name}
                  />
                  <div className="card__content">
                    <h2 className="card__name">{plant.name}</h2>
                    <p className="card__price">€{plant.price}</p>
                    <p>Hoogte: {plant.height}cm</p>
                    <p>Diameter: {plant.diameter}cm</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
