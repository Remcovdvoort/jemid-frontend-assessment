import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

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
      <div className="container__detail">
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
    </>
  );
};

export default Detail;
