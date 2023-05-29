import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();

  const FooterContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  });

  const SocialIcons = styled("div")({
    "& > *": {
      marginRight: theme.spacing(2),
    },
  });

  return (
    <FooterContainer maxWidth="sm">
      <Typography variant="body1" align="center" color="inherit">
        © 2023 Attorney's Firm. All rights reserved.
      </Typography>
      <SocialIcons>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;