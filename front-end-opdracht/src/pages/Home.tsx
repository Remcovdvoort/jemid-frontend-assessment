import React, { useEffect, useState } from "react";
import monstera from "../img/monstera.jpg";
import { Filters } from "../containers/Filters";
import Box from "@mui/material/Box";
import { DropdownWrapper } from "../components/FilterDropdown";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper } from "@mui/material";
import InputIcon from "@mui/material/IconButton";

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

const Home = () => {
  const [text, setText] = useState("");
  const [plants, setPlant] = useState([]);
  let pageSize = 10;

  const handleOnClick = () => {
    fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=${pageSize}&pageIndex=0&nameFilter=${text}`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPlant(res.products);
      });
  };

  useEffect(() => {
    fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=${pageSize}&pageIndex=0`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPlant(res.products);
      });
  }, []);


  return (
    <>
      <Header />
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
                    height: "27vh",
                  }}
                >
                  <Paper
                    sx={{
                      m: "5px auto",
                      p: "10px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "70%",
                      height: 50,
                      borderRadius: 2,
                      color: "#b394cb",
                      border: "3px solid #b394cb",
                      backgroundColor: "rgb(241, 225, 254)",
                    }}
                  >
                    <InputBase
                      sx={{
                        ml: 1,
                        flex: 1,
                        color: "#b394cb",
                        fontWeight: "bold",
                      }}
                      type="text"
                      value={text}
                      placeholder="Zoek een plant"
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <InputIcon
                      disabled={!text}
                      type="submit"
                      value="Submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                      onClick={handleOnClick}
                    >
                      <SearchIcon />
                    </InputIcon>
                  </Paper>

                  <Filters />
                </Box>
              }
            />
          </Box>

          <div className="product-grid">
            {plants.map((plant: Product) => (
              <Link
                to={`/Detail/${plant.name}`}
                style={{
                  paddingInline: "2rem",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
                  textDecoration: "none",
                  color: "black",
                }}
              >
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
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
