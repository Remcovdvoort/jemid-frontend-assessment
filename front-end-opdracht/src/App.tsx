import { useEffect, useState } from "react";
import "./App.css";
import annie from "./img/Anniee.png";
import SearchBar from "./components/SearchBar";
import PriceSlider from "./components/PriceSlider";
import { Filters } from "./containers/Filters";
import Box from "@mui/material/Box";
import HeightSlider from "./components/HeightSlider";
import DiameterSlider from "./components/DiameterSlider";

function App() {
  const [plants, setPlants] = useState([]);

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


  return (
    <>
      <div className="App">
        <header>
          
          <img className="Annie" src={annie} alt="" />
          
        </header>
        
        <main>
        
          <div className="container">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                m: 1,
                bgcolor: "#eaf8e7",
                boxShadow: 1,
                borderRadius: 1,
                width: "80%",
                margin: "30px auto",
                height: "180px",
              }}
            >

          <SearchBar />
          <PriceSlider/>
          <HeightSlider/>
          <DiameterSlider/>
          <Filters/>
          </Box>
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
