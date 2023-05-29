import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

function TeamPage() {
  const theme = useTheme();

  const PageContainer = styled(Container)({
    paddingTop: "100px",
    paddingBottom: "40px",
    backgroundColor: theme.palette.whitesmoke,
    minHeight: "100vh",
  });

  const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.white,
    marginBottom: theme.spacing(2),
    boxShadow: `0px 0px 15px ${theme.palette.evenDarkerGreen}`,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const StyledCardContent = styled(CardContent)({
    textAlign: "center",
  });

  const StyledImg = styled(CardMedia)({
    height: 140,
    borderRadius: "50%",
    marginBottom: theme.spacing(2),
  });

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Partner",
      imageUrl: "/images/john-doe.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Partner",
      imageUrl: "/images/jane-smith.jpg",
    },
    // Add more team members here...
  ];

  return (
    <PageContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <StyledCard>
              <StyledImg image={member.imageUrl} />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

export default TeamPage;