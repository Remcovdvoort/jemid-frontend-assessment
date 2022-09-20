import React, { useEffect, useState } from "react";
import monstera from "../img/monstera.jpg";
import Box from "@mui/material/Box";
import { DropdownWrapper } from "../components/FilterDropdown";
import { Dropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, InputBase, Paper, Slider, StepLabel } from "@mui/material";
import DropDown from "../components/DropdownStPlace";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



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
  const [valueH, setValueH] = useState<number[]>([20, 200]);
  const [valueD, setValueD] = useState<number[]>([20, 100]);
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(200);
  const [minDiameter, setMinDiameter] = useState(0);
  const [maxDiameter, setMaxDiameter] = useState(100);

  const [standingPlace, setSPlace] = useState<string>("");
  const standingPlaces = () => {
    return ["Sun", "Partial", "Shadow"];
  };
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  let pageSize = 10;

  const handleOnClick = () => {
    fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=${pageSize}&pageIndex=0&standingPlaceFilters=${standingPlace}&nameFilter=${text}&heightMinimumFilter=${minHeight}&heightMaximumFilter=${maxHeight}&diameterMinimumFilter=${minDiameter}&diameterMaximumFilter=${maxDiameter}`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        console.log(
          `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=${pageSize}&pageIndex=0&standingPlaceFilters=${standingPlace}&nameFilter=${text}&heightMinimumFilter=${minHeight}&heightMaximumFilter=${maxHeight}&diameterMinimumFilter=${minDiameter}&diameterMaximumFilter=${maxDiameter}`
        );
        setPlant(res.products);
      });
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const standingSelection = (standing: string): void => {
    setSPlace(standing);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
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
                    height: "39vh",
                  }}
                >
                  <Paper
                    sx={{
                      m: "0px auto",
                      p: "0px 4px",
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
                  </Paper>
                  <Box
                    sx={{
                      width: 300,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 3,
                      margin: "30px auto",
                    }}
                  >
                    <Dropdown label="Hoogte">
                      <Box
                        sx={{
                          width: 300,
                          borderWidth: 1,
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "20px auto",
                        }}
                      >
                        <StepLabel
                          sx={{
                            color: "black",
                            padding: "0 10px",
                          }}
                        >
                          {valueH[0]}cm
                        </StepLabel>
                        <Slider
                          getAriaLabel={() => "height range"}
                          value={valueH}
                          onChange={(Event, newValue) => {
                            setValueH(newValue as number[]);
                            setMinHeight(newValue[0]);
                            setMaxHeight(newValue[1]);
                          }}
                          onChangeCommitted={(Event, newValue) => {
                            setValueH(newValue as number[]);
                            setMinHeight(newValue[0]);
                            setMaxHeight(newValue[1]);
                          }}
                          valueLabelDisplay="auto"
                          min={20}
                          max={200}
                          sx={{
                            color: "#b394cb",
                            height: 5,
                          }}
                        />
                        <StepLabel
                          sx={{
                            color: "black",
                            padding: "0 10px",
                          }}
                        >
                          {valueH[1]}cm
                        </StepLabel>
                      </Box>
                    </Dropdown>
                    <Dropdown label="Diameter">
                      <Box
                        sx={{
                          width: 300,
                          borderWidth: 1,
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "20px auto",
                        }}
                      >
                        <Box
                          sx={{
                            width: 300,
                            borderWidth: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px auto",
                          }}
                        >
                          <StepLabel
                            sx={{
                              color: "black",
                              padding: "0 10px",
                            }}
                          >
                            {valueD[0]}cm
                          </StepLabel>
                          <Slider
                            getAriaLabel={() => "Diameter range"}
                            value={valueD}
                            onChange={(Event, newValue) => {
                              setValueD(newValue as number[]);
                              setMinDiameter(newValue[0]);
                              setMaxDiameter(newValue[1]);
                            }}
                            valueLabelDisplay="auto"
                            min={20}
                            max={100}
                            sx={{
                              color: "#b394cb",
                              height: 5,
                            }}
                          />
                          <StepLabel
                            sx={{
                              color: "black",
                              padding: "0 10px",
                            }}
                          >
                            {valueD[1]}cm
                          </StepLabel>
                        </Box>
                      </Box>
                    </Dropdown>

                    <Button
                      sx={{
                        color: "#b394cb",
                        textTransform: "none",
                        fontWeight: "bold",
                        backgroundColor: "rgb(241, 225, 254)",
                        borderRadius: "6px",
                        transform: "translateX(-95px)",
                        marginTop: "15px",
                        height: "40px",
                        border: "3px solid #b394cb",
                        padding: "3rem 4rem",
                        
                        "&:hover": {
                          backgroundColor: "rgb(241, 225, 254)",
                        },

                      }}
                      className={showDropDown ? "active" : undefined}
                      onClick={(): void => toggleDropDown()}
                    >
                      
                      {!showDropDown && (
                        <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >Standplaats <KeyboardArrowDownIcon/></Box>
                      
                      <div>{standingPlace} </div>
                      </Box>
                      </>
                      )}


                      {showDropDown && (
                        <DropDown
                          stPlaces={standingPlaces()}
                          showDropDown={false}
                          toggleDropDown={(): void => toggleDropDown()}
                          standingSelection={standingSelection}
                        />
                      )}
                    </Button>

                   
                  </Box>
                  <Button
                      onClick={handleOnClick}
                      variant="contained"
                      component="label"
                      sx={{
                      m: "0px auto",
                      p: "0px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "97%",
                      height: 50,
                      borderRadius: 2,
                      color: "white",
                      backgroundColor: "#b394cb",
                        "&:hover": {
                          backgroundColor: "#9679a0",
                        },
                      }}
                    >
                      Toepassen
                    </Button>
                </Box>
              }
            />
          </Box>

          <div className="product-grid">
            {plants.map((plant: Product) => (
              <Link
                to={`/Detail/${plant.name}`}
                style={{
                  paddingInline: "5rem",
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
