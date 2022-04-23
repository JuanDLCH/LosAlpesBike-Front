import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LogoContainer, NavLink, NavBtnLink } from './NavbarElements.js';
import logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../auth/useAuth'
import { useNavigate } from 'react-router-dom';


const pages = ['Admin'];

const ResponsiveAppBar = () => {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogOut = () => {
        localStorage.removeItem('user');
        navigate('/')
        window.location.reload();
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    const { user } = useAuth()

    const [userData, setUserData] = useState()
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('user')))
    }, [user])

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="sticky" color='primary'>
                <Container maxWidth="xl">
                    <Toolbar >
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <LogoContainer >
                                <NavLink to='/'>
                                    <img src={logo} style={{ width: '220px' }} alt='logo' />
                                </NavLink>
                            </LogoContainer>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <NavLink to={'/'}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Inicio</Typography>
                                    </MenuItem>
                                </NavLink>
                                {pages.map((page) => (
                                    <NavLink to={'/' + page} key={page}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink to={'/' + page} key={page}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>
                        <Box sx={{ marginRight: { md: "15%" }, flexGrow: 0 }}>
                            {
                                !userData
                                    ? <NavBtnLink to='/' onClick={handleLogOut}>Ingresar</NavBtnLink>
                                    : <NavBtnLink to='/' onClick={handleLogOut}>Salir</NavBtnLink>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default ResponsiveAppBar;
