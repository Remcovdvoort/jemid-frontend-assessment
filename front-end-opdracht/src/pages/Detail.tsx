import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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

const Detail = () => {
  const [plants, setPlants] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=10&pageIndex=0&nameFilter=${name}`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPlants(res.products);
      });
  }, []);

  return (
    <>
      <Header />
      {/* terug naar homepage */}
      
      <div className="container__detail">
        <Link to="/"
          style={{
            textDecoration: "none",
            color: "#a979cd",
            border: "3px solid #a979cd",
            padding: "15px",
            borderRadius: "5px",
            fontWeight: "bold",
            height: "70vh",
          }}
        >
        <ArrowBackIcon 
        style={{
          height: "15px",
          marginTop: "15px",
          

        }}
        />
        terug naar overzicht
        </Link>


        {plants.map((plant: Product) => (
          <div className="plant" key={plant.id}>
            <img src={plant.photoUrl} alt={plant.name} />
            <div className="plant__description">
              <h1>Over de {plant.name}</h1>
              <p>{plant.description}</p>
            </div>
            <div className="plant__data">
              <p>Hoogte: {plant.height}cm</p>
              <p>Diameter: {plant.diameter}cm</p>
                <p>Standplaats: {plant.standingPlace}</p>
                <p>Bewateringsbehoefte: {plant.wateringNeeds}</p>
                <p className="prijs">€{plant.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Detail;
