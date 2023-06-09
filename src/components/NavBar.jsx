
import { useState } from 'react';
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
import { Link } from 'react-router-dom';
import '../Styles/nav.css';
/* import { createTheme } from '@mui/material/styles'; */
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#000000',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
  

const pages = ['Home','Perfil', 'Portfolio', 'Bio', 'Contacto', 'Prueba1', 'Mas' ];

function ResponsiveAppBar() {


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    const culurcitos = {
        /* backgroundColor: '#000000', */
        height: '8vh',
        borderBottom: '1px solid #343434',
        shadowBottom: '0px',
        display:"flex",
        backgroundColor:"black",
        margin:0,
        /* width:"100%", */
        marginRight:0,
        
    }
    
    
    



    return (
        <ThemeProvider theme={theme}>
    <AppBar color='primary'  position="static">
        <Container className='nav_nav' sx={culurcitos} maxWidth="xl">
        <Toolbar disableGutters >
            
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 0,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                
            }}
            >
            
            <img style={ {width:"150px"}} src="https://i.ibb.co/vxKP113/nuevo-logo.png" alt="Frame-23" border="0" />
            
            </Typography>
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
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"> <Link style={ {textDecoration:"none", color:"black"}} to={ `/${page}`}>{page}</Link> </Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'SigmarOne',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                alignContent: 'center',
                justifyContent:"center"
            }}
            >
            <div style={{width:"50vw", display:"flex", justifyContent:"flex-end", alignItems:"center"}}>   
            <img style={ {width:"110px", /* marginLeft:"200px"  */}} src="https://i.ibb.co/vxKP113/nuevo-logo.png" alt="Frame-23" border="0" />
            </div> 
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingLeft:"30vw" }}>
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: 'block' }}
                >
                <Link style={ {textDecoration:"none", color:"white", /* marginLeft:"10vw" */}} to={ `/${page}`}>{page}</Link>
                </Button>
            ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Menu
                /* sx={{ mt: '45px' }} */
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
            </Menu>
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
    
    );
}
export default ResponsiveAppBar;