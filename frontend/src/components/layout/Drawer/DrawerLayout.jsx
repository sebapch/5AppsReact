import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Grid from "@mui/material/Grid";
import "./DrawerLayout.css";
import HomeVioleta from "../../../assets/homeVioleta.svg";
import HomeBlanco from "../../../assets/homeBlanco.svg";
import VaultsVioleta from "../../../assets/vaultsVioleta.svg";
import VaultsBlanco from "../../../assets/vaultsBlanco.svg";
import AjustesVioleta from "../../../assets/ajustesVioleta.svg";
import AjustesBlanco from "../../../assets/ajustesBlanco.svg";
import GuuruVioleta from "../../../assets/guuruVioleta.svg";
import GuuruBlanco from "../../../assets/guuruBlanco.svg";
import PerfilVioleta from "../../../assets/usuarioVioleta.svg";
import PerfilBlanco from "../../../assets/usuarioBlanco.svg";
import UserContext from "../../../context/userContext";
import Button from '@mui/material/Button';
import Footer from "../Footer";
import Header from "../Header";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const DrawerLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('Home');

  /* console.log(userData); */

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "");
    localStorage.setItem("isAuthenticated", "false");
  
  };



  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} className='drawer' >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Guuru
          </Typography>
          <div className="btn-drawer">
            {userData.user ? (
              <div>
                <label>hola {userData?.user.displayName}</label>
                <Button onClick={logout} color="error"  variant="contained">Logout</Button>
              </div>
            ) : (
              <div>
                <Link to='/register' ><Button color="success"  variant="contained">Register</Button></Link>
                <Link to='/login' ><Button color="success"  variant="contained" >Log In</Button></Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="list">
        <DrawerHeader className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="list">
          <Link to="/" className="links-footer" onClick={() => setActiveTab('Home')}>
            <img src={activeTab === 'Home' ? HomeVioleta : HomeBlanco} alt="" className="img-drawer" />
            <label className={activeTab === 'Home' ? "text-drawer-selected" : "text-drawer"}>Inicio</label>
          </Link>
          <Link to="/vaults" className="links-footer" onClick={() => setActiveTab('Vaults')}>
            <img src={activeTab === 'Vaults' ? VaultsVioleta : VaultsBlanco} alt="" className="img-drawer" />
            <label className={activeTab === 'Vaults' ? "text-drawer-selected" : "text-drawer"}>Vaults</label>
          </Link>
          <Link to="/step1" className="links-footer" onClick={() => setActiveTab('Guuru')}>
            <img src={activeTab === 'Guuru' ? GuuruVioleta : GuuruBlanco} alt="" className="img-drawer" />
            <label className={activeTab === 'Guuru' ? "text-drawer-selected" : "text-drawer"}>Guuru</label>
          </Link>
          <Link to="/perfil" className="links-footer" onClick={() => setActiveTab('Perfil')} >
            <img src={activeTab === 'Perfil' ? PerfilVioleta : PerfilBlanco} alt="" className="img-drawer" />
            <label className={activeTab === 'Perfil' ? "text-drawer-selected" : "text-drawer"}>Perfil</label>
          </Link>
          <Link to="/opciones" className="links-footer" onClick={() => setActiveTab('Opciones')} >
            <img src={activeTab === 'Opciones' ? AjustesVioleta : AjustesBlanco} alt="" className="img-drawer" />
            <label className={activeTab === 'Opciones' ? "text-drawer-selected" : "text-drawer"} >Ajustes</label>
          </Link>
        </List>
        <Divider />
      </Drawer>
      
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "85.1vh", marginTop: '3rem' }} >
      <Header className='mobile-header'/>
      <Container className="children-container">
        {children}
      </Container>
       
        <Footer className='mobile-footer'/>
      </Box>
     
      
    </Box>
  );
};

export default DrawerLayout;