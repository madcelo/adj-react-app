import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ServicesIcon from "@mui/icons-material/Policy";
import TeamIcon from "@mui/icons-material/People";
import ContactIcon from "@mui/icons-material/ContactMail";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const StyledAppBar = styled(AppBar)({
    backgroundColor: theme.palette.whitesmoke,
    color: theme.palette.golden,
    boxShadow: "0px 3px 5px 2px rgba(0,0,0,0.2)",
  });

  const StyledLink = styled(Link)({
    marginLeft: "20px",
    textDecoration: "none",
    color: theme.palette.golden,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2em",
    "&:hover": {
      color: theme.palette.palmeirasGreen,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2em",
    },
  });

  const DrawerMenu = () => (
    <Box sx={{ width: 250 }}>
      <Box sx={{ padding: 2 }}>
        {["/", "/about", "/services", "/team", "/contact"].map(
          (route, index) => {
            const icons = [
              <HomeIcon />,
              <InfoIcon />,
              <ServicesIcon />,
              <TeamIcon />,
              <ContactIcon />,
            ];
            const labels = ["Home", "About", "Services", "Team", "Contact"];
            return (
              <StyledLink
                key={index}
                onClick={() => setDrawerOpen(false)}
                to={route}
              >
                {icons[index]} {labels[index]}
              </StyledLink>
            );
          }
        )}
      </Box>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Attorney's Firm</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <DrawerMenu />
            </Drawer>
          </>
        ) : (
          <>
            {["/", "/about", "/services", "/team", "/contact"].map(
              (route, index) => {
                const icons = [
                  <HomeIcon />,
                  <InfoIcon />,
                  <ServicesIcon />,
                  <TeamIcon />,
                  <ContactIcon />,
                ];
                const labels = ["Home", "About", "Services", "Team", "Contact"];
                return (
                  <StyledLink key={index} to={route}>
                    {icons[index]} {labels[index]}
                  </StyledLink>
                );
              }
            )}
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;