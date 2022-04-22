import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Nav, Wrapper, LogoContainer, NavLink, Bars, Close, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js';
import logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../auth/useAuth'


const pages = ['Productos', 'Nosotros', 'Contacto'];
const settings = ['Cuenta', 'Administración'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        localStorage.removeItem('user');
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
            <AppBar position="initial" color='primary'>
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
                                    <NavLink to={'/' + page}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink to={'/' + page}>
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
                                    ? <NavBtnLink to='/sign-in'>Ingresa</NavBtnLink>
                                    : <Tooltip title="Opciones">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                            }

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <NavLink to={'/' + setting}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleLogOut}>
                                    <NavLink to={'/'}>
                                        <Typography textAlign="center">Salir</Typography>
                                    </NavLink>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default ResponsiveAppBar;
