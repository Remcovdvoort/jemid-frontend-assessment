import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DiameterSlider from "../components/DiameterSlider";
import { DropdownWrapper } from "../components/Dropdown";
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
            <DropdownWrapper 
            label="Prijs"
            >  
            <PriceSlider/>
            </DropdownWrapper>

            <DropdownWrapper 
            label="Hoogte"
            >  
            <HeightSlider/>
            </DropdownWrapper>

            <DropdownWrapper 
            label="Diameter"
            >  
            <DiameterSlider/>
            </DropdownWrapper>
            <Button disabled>Verwijder alle filters</Button>
        </Box>
        
    )
}

