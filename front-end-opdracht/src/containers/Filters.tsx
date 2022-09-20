import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DiameterSlider from "../components/DiameterSlider";
import { Dropdown } from "../components/Dropdown";
import HeightSlider from "../components/HeightSlider";
import PriceSlider from "../components/PriceSlider";

export const Filters = () => {
    return (
        <Box
        sx={{
            width: 300,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 3,
            margin : "30px auto",
        }}>
            <Dropdown
            label="Prijs"
            >  
            <PriceSlider/>
            </Dropdown>

            <Dropdown 
            label="Hoogte"
            >  
            <HeightSlider/>
            </Dropdown>

            <Dropdown 
            label="Diameter"
            >  
            <DiameterSlider/>
            </Dropdown>
            <Button 
            disabled>Verwijder alle filters</Button>
        </Box>
        
    )
}

