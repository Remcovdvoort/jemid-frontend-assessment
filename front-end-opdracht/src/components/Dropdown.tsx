import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material';
import { Menu, MenuProps} from '@mui/material';
import Box from '@mui/material/Box';


const StyledMenu = styled((props : MenuProps) => (
    <Menu
        elevation={0}
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
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            '0px 2px 2px -1px rgb(0 0 0 / 20%), 0px 1px 5px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%)',
        '& .MuiMenu-list': {
            padding: '4px 5px',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(4),
            },
            '&:active': {
                backgroundColor: theme.palette.action.selected,
            },
        },
    },
}));


interface DropdownWrapperProps {
    label: string;
    children: JSX.Element | JSX.Element[];
}

export const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ label, children }) => {
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
                aria-haspopup="true"
                variant="outlined"
                disableElevation
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
                {label}
            </Button>
            <StyledMenu
                id='demo-menu'
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
