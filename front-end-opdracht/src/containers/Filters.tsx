import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Filters = () => {
    return (
        <Box
        sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
        }}>
            <Button disabled>Verwijder alle filters</Button>
        </Box>
        
    )
}

