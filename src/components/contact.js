import React from "react";
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
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import hero from "../asset/hero.jpg";
import gmail from "../asset/gmail.png";
import mobile from "../asset/mobile.png";
import git from "../asset/git.png";
import linked from "../asset/linked.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Project", "Contact"];

export function Contact(props: Props) {
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <div className="contact-container">
                <div className="contact">
                  <h1 className="skill-session">
                    Get In <span className="blue">Touch.</span>
                  </h1>
                  <p>
                    Looking to partner or work together? Reach out through the
                    form and I'll get back to you in the a hour.
                  </p>
                  <div className="contact-list">
                    <p>
                      <img className="cont-image" src={gmail} alt="pic" />{" "}
                      govarthananduraisamy@gmail.com
                    </p>
                    <p>
                      <img className="cont-image" src={mobile} alt="pic" /> +91
                      8220839008
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/govarthanan-duraisamy-9185a22a2"
                        target="_blank"
                      >
                        <img className="cont-image" src={linked} alt="pic" />{" "}
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
                <img src={hero} alt="pic" className="images" />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
