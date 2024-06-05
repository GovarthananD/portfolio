import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Project", "Contact"];

export default function Navbar(props: Props) {
  const navigation = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Govarthanan D
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item}`}
              sx={{ textDecoration: "none" }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={`${item}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: "#fff" }} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "black", display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "black",
                display: { xs: "none", sm: "block" },
              }}
            >
              Govarthanan D
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "black" }}>
                  <Link to={`/${item}`}>{item}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Toolbar />
      </Box>
      <Project />
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export function Project() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <div>
              <h1 className="best">
                My <span className="blue">Best</span> Creations
              </h1>
              <p className="robust">
                Designing and Developing Robust and Stylish Web Applications for
                a Decade and Counting
              </p>
              <h1 className="service">
                Explore our <span className="blue"> Services </span>
              </h1>
              <div className="projects">
                <div className="card">
                  <a
                    href="https://glistening-mandazi-63a7dd.netlify.app/"
                    target="_blank"
                  >
                    <img
                      className="card-pic"
                      src="https://t4.ftcdn.net/jpg/07/97/74/79/240_F_797747974_MtGQDNdnzuREZ6e0VH5yIoM9FFAdgMLN.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://glistening-mandazi-63a7dd.netlify.app/"
                      target="_blank"
                    >
                      <h4>Movie App</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
                <div className="card">
                  <a
                    href="https://dreamy-llama-96ce38.netlify.app/"
                    target="_blank"
                  >
                    <img
                      className="card-pic"
                      src="https://t4.ftcdn.net/jpg/06/04/37/73/240_F_604377311_MPS3sU5CZhr3WukxADqEhU7SnQg6QHJe.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://dreamy-llama-96ce38.netlify.app/"
                      target="_blank"
                    >
                      {" "}
                      <h4 className="card-title">CRUD</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
                <div className="card">
                  <a
                    href="https://neon-swan-1beb3a.netlify.app/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      className="card-pic"
                      src="https://t3.ftcdn.net/jpg/04/81/76/22/240_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://neon-swan-1beb3a.netlify.app/"
                      target="_blank"
                    >
                      <h4>Netflix</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
                <div className="card">
                  <a
                    href="https://extraordinary-snickerdoodle-18f4b7.netlify.app/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      className="card-pic"
                      src="https://t4.ftcdn.net/jpg/07/08/88/63/240_F_708886368_wx3o9y1uVfcyKFnG0vkhTx6bUZLSeAm8.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://extraordinary-snickerdoodle-18f4b7.netlify.app/"
                      target="_blank"
                    >
                      <h4>Authentication</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
                <div className="card">
                  <a
                    href="https://splendorous-figolla-858949.netlify.app/"
                    target="_blank"
                  >
                    <img
                      className="card-pic"
                      src="https://t3.ftcdn.net/jpg/01/64/06/10/240_F_164061043_0P7t7hgDZRMqH3gWHVakDYv6eUTwERG4.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://splendorous-figolla-858949.netlify.app/"
                      target="_blank"
                    >
                      <h4>Capstone</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
                <div className="card">
                  <a
                    href="https://govarthanand.github.io/Makeup-Api/"
                    target="_blank"
                  >
                    <img
                      className="card-pic"
                      src="https://t4.ftcdn.net/jpg/03/49/76/23/240_F_349762368_pVUH9UwYpKvUI5ZgJaoq1qW9bEROxqQd.jpg"
                      alt="pic"
                    />
                  </a>
                  <div className="card-container">
                    <a
                      href="https://govarthanand.github.io/Makeup-Api/"
                      target="_blank"
                    >
                      <h4>Makeup API</h4>
                    </a>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
