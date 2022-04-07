import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
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
import VaultsBlanco from "../../../assets/vaultsVioleta.svg";
import AjustesBlanco from "../../../assets/ajustesVioleta.svg";
import GuuruVioleta from "../../../assets/guuruVioleta.svg";
import PerfilBlanco from "../../../assets/usuarioVioleta.svg";
import UserContext from "../../../context/userContext";
import Button from '@mui/material/Button';

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
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
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
  const [open, setOpen] = React.useState(true);
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

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
    <Box sx={{ display: "flex" }} className='drawer'>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/" className="links-footer">
            <img src={HomeVioleta} alt="" className="img-drawer" />
            <label className="text-drawer">Inicio</label>
          </Link>
          <Link to="/vaults" className="links-footer">
            <img src={VaultsBlanco} alt="" className="img-drawer" />
            <label className="text-drawer">Vaults</label>
          </Link>
          <Link to="/step1" className="links-footer">
            <img src={GuuruVioleta} alt="" className="img-drawer" />
            <label className="text-drawer">Guuru</label>
          </Link>
          <Link to="/perfil" className="links-footer">
            <img src={PerfilBlanco} alt="" className="img-drawer" />
            <label className="text-drawer">Perfil</label>
          </Link>
          <Link to="/settings" className="links-footer">
            <img src={AjustesBlanco} alt="" className="img-drawer" />
            <label className="text-drawer">Ajustes</label>
          </Link>
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "85.1vh" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DrawerLayout;
