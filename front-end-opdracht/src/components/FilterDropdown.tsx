import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material';
import { Menu, MenuProps} from '@mui/material';
import Box from '@mui/material/Box';
import Filter from '../img/filter_purple.png';

const StyledMenu = styled((props : MenuProps) => (
    <Menu
        elevation={3}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center',
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'center',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.spacing(3),
        minWidth: 180,
        '& .MuiMenu-list': {
            padding: '20px 5px',
            border: '3px solid #d0b3e7',
            backgroundColor: '#fbf6ff'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(4),
            },
            '&:active': {
                backgroundColor: theme.palette.action.selected,
                margin: '0 10px',
            },
        },
    },
}));


interface FilterWrapperProps {
    img: string;
    children: JSX.Element | JSX.Element[];
}

export const DropdownWrapper: React.FC<FilterWrapperProps> = ({ img, children }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="dropdown-button"
                variant="outlined"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}
                style={{
                    color: "#b394cb",
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: "rgb(241, 225, 254)",
                    borderRadius: "6px",    
                    transform: "translateX(-95px)",
                    marginTop: "15px",
                    height: "50px",
                    border : "3px solid #b394cb",
                }}

            >
                <img src={Filter} alt="filter" style={{width: "30px", height: "30px", marginRight: "10px"}}/>
            </Button>
            <StyledMenu
                MenuListProps={{
                    'aria-labelledby': 'dropdown-menu'
                }} 
                anchorEl={anchorEl}  
                open={open}
                onClose={handleClose}     
            >
                <Box>
                  {children}
                </Box>
            </StyledMenu>

        </div>
    );
}