import { useEffect, useState } from "react";
import "./App.css";
import annie from "./img/Anniee.png";

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
    // .catch((err) => {
    //   setError(err);
    // });
  }, []);

  return (
    <>
      <div className="App">
        <header>
          <h1>
            <img className="Annie" src={annie} alt="" />
          </h1>
        </header>

        <main>

          <div className="container">
            <div className="sort">
              <h2>Filteren op:</h2>
              <select>
                <option value="naam">Naam</option>
                <option value="height">Hoogte</option>
                <option value="diameter">Diameter</option>
                <option value="standplaats">Standplaats</option>
              </select>
            </div>




            <div className="product-grid">
              {plants.map((plant: Product) => (
                <div className="card stacked" key={plant.id}>
                  <img className="card__img" src={plant.photoUrl} alt={plant.name} />
                  <div className="card__content">
                    <h2 className="card__title">{plant.name}</h2>
                    <p className="card__price">€{plant.price}</p>
                    <p>Hoogte: {plant.height}cm</p>
                    <p>Diameter: {plant.diameter}cm</p>
                  </div>
                </div>
              ))}




            </div>
          </div>
        </main>

        {/* <ul className="Planten_lijst">

            {plants.map((product: Product) => (

              <div className="Card" key={product.id}>

                <img
                  className="Photo"
                  src={product.photoUrl}
                  alt={product.name}
                />

                <div className="Text">
                <h2>{product.name}</h2>
                <p>Prijs: €{product.price}</p>
                <p>Hoogte: {product.height}cm</p>
                <p>Diameter: {product.diameter}cm</p>
                </div>



              </div>
            ))}
          </ul> */}
      </div>
    </>
  );
}

export default App;
