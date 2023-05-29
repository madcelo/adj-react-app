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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  });

  const StyledLink = styled(Link)({
    marginLeft: "20px",
    textDecoration: "none",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    marginBottom: "2em",
  });

  const DrawerMenu = () => (
    <Box sx={{ width: 250 }}>
      <Box sx={{ padding: 2 }}>
        <StyledLink onClick={() => setDrawerOpen(false)} to="/">
          <HomeIcon /> Home
        </StyledLink>
        <StyledLink onClick={() => setDrawerOpen(false)} to="/about">
          <InfoIcon /> About
        </StyledLink>
        <StyledLink onClick={() => setDrawerOpen(false)} to="/services">
          <ServicesIcon /> Services
        </StyledLink>
        <StyledLink onClick={() => setDrawerOpen(false)} to="/team">
          <TeamIcon /> Team
        </StyledLink>
        <StyledLink onClick={() => setDrawerOpen(false)} to="/contact">
          <ContactIcon /> Contact
        </StyledLink>
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
            <StyledLink to="/">
              <HomeIcon /> Home
            </StyledLink>
            <StyledLink to="/about">
              <InfoIcon /> About
            </StyledLink>
            <StyledLink to="/services">
              <ServicesIcon /> Services
            </StyledLink>
            <StyledLink to="/team">
              <TeamIcon /> Team
            </StyledLink>
            <StyledLink to="/contact">
              <ContactIcon /> Contact
            </StyledLink>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
