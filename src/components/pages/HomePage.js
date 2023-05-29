import React from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Instagram from "../display/Instagram";
import TeamAndContact from "../display/TeamAndContact";

function HomePage() {
  const theme = useTheme();

  const PageContainer = styled(Container)({
    paddingTop: "40px",
    paddingBottom: "40px",
    color: theme.palette.text.title,
    backgroundColor: theme.palette.whitesmoke,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  });

  const PageTitle = styled(Typography)({
    color: theme.palette.darkGreen,
    fontWeight: theme.typography.h4.fontWeight,
    fontSize: "2em",
    marginBottom: "20px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
    },
  });

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <PageContainer>
      <motion.div variants={fadeIn} initial="initial" animate="animate">
        <PageTitle variant="h4">Seja bem-vindo a Advocacia Di Jorge!</PageTitle>
      </motion.div>
      <Instagram />
      <TeamAndContact />
    </PageContainer>
  );
}

export default HomePage;