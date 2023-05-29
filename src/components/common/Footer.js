import React from "react";
import { Container, Typography, IconButton } from "@mui/material";
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
    padding: theme.spacing(3),
    backgroundColor: theme.palette.evenDarkerGreen,
    color: theme.palette.whitesmoke,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  });

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.whitesmoke,
    "&:hover": {
      color: theme.palette.golden,
      transition: "color 0.3s ease-in-out",
    },
  }));

  const SocialIcons = styled("div")({
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  });

  return (
    <FooterContainer>
      <Typography variant="body1" color="inherit">
        © 2023 Attorney's Firm. All rights reserved.
      </Typography>
      <SocialIcons>
        <StyledIconButton>
          <FacebookIcon />
        </StyledIconButton>
        <StyledIconButton>
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton>
          <LinkedInIcon />
        </StyledIconButton>
        <StyledIconButton>
          <InstagramIcon />
        </StyledIconButton>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;