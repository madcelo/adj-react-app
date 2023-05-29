import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

function AboutPage() {
  const theme = useTheme();

  const PageContainer = styled(Container)({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.whitesmoke,
    color: theme.palette.evenDarkerGreen,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(15),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(20),
    },
  });

  const MotionTypography = motion(Typography);

  return (
    <PageContainer>
      <MotionTypography
        variant="h4"
        align="center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        About Us
      </MotionTypography>

      <StyledBox>
        <Typography variant="h6">
          We are a group of dedicated professionals with decades of experience
          in law and legislation. We provide our clients with the highest
          quality service, and we pride ourselves on our commitment to
          excellence and integrity.
        </Typography>
      </StyledBox>
    </PageContainer>
  );
}

export default AboutPage;