import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const servicesData = [
  { id: 1, title: "Service 1", description: "Service description" },
  { id: 2, title: "Service 2", description: "Service description" },
  // ...add more services
];

function ServicesPage() {
  const theme = useTheme();

  const PageContainer = styled(Container)({
    paddingTop: "100px",
    paddingBottom: "100px",
    backgroundColor: theme.palette.whitesmoke,
  });

  const ServiceCard = styled(Card)({
    backgroundColor: theme.palette.white,
    color: theme.palette.evenDarkerGreen,
    boxShadow: `0 0 10px ${theme.palette.evenDarkerGreen}`,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const CardTitle = styled(Typography)({
    fontWeight: 600,
    color: theme.palette.darkGreen,
  });

  const CardDescription = styled(Typography)({
    color: theme.palette.darkGreen,
  });

  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4}>
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ServiceCard>
                <CardContent>
                  <CardTitle variant="h6">{service.title}</CardTitle>

                  <CardDescription variant="body2">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </ServiceCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

export default ServicesPage;