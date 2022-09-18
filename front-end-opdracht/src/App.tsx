import { useEffect, useState } from "react";
import "./styles/App.css";
import annie from "./img/Annie1.png";
import monstera from "./img/monstera.jpg";
import SearchBar from "./components/SearchBar";
import { Filters } from "./containers/Filters";
import Box from "@mui/material/Box";
import { DropdownWrapper } from "./components/FilterDropdown";

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
          <div
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              background:
                "linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0, 0.1)), url(" +
                monstera +
                ")",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              margin: "0",
              padding: "0",
              zIndex: "-1",
            }}
          />

          <div className="container">
            <Box
              sx={{
                paddingLeft: "53%",
                width: "100%",
                height: "100%",
                marginTop: "100vh",
                marginBottom: "5rem",
              }}
            >
              <DropdownWrapper
                img="Filter"
                children={
                  <Box
                    sx={{
                      width: "50vw",
                      height: "33vh",
                    }}
                  >
                    <SearchBar />
                    <Filters />
                  </Box>
                }
              />
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
