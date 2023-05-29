import React from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

function ServicesPage() {
  const theme = useTheme();

  const PageContainer = styled(Container)({
    paddingTop: "40px",
    paddingBottom: "40px",
    color: theme.palette.text.primary,
  });

  return (
    <PageContainer>
      <Typography variant="h4" align="center">
        Our Services
      </Typography>
      {/* Add your services page content here */}
    </PageContainer>
  );
}

export default ServicesPage;
