import {AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midNavLinks = [
        {title: 'catalog', path: '/catalog'},
        {title: 'about', path: '/about/'},
        {title: 'contact', path: '/contact/'},
];

const rightNavLinks = [
        {title: 'login', path: '/login'},
        {title: 'register', path: '/register'},
];

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {color: 'grey.400'},
    '&.active': {color: 'grey.500'},
    textDecoration: 'none'

}

export function Navbar({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={NavLink} to="/" exact sx={navStyles}>
                        POC-Ecommerce-React
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>
                <Box>
                    <List sx={{ display: 'flex'}}>
                        {midNavLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton size="large" sx={{ color: "inherit"}}>
                        <Badge badgeContent={4} color={"secondary"}>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex'}}>
                        {rightNavLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
