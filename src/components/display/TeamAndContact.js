import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const HeroImage = styled(({ bgImage, ...otherProps }) => (
  <motion.div {...otherProps} />
))(({ theme, bgImage }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.white,
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: theme.palette.golden,
    transform: "scale(1.05)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.evenDarkerGreen,
  border: `1px solid ${theme.palette.golden}`,
  "&:hover": {
    backgroundColor: theme.palette.darkGreen,
  },
}));

const TeamAndContact = () => {
  const theme = useTheme();
  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <HeroImage
            bgImage="/assets/images/banner1.jpg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StyledButton variant="contained">
              <Typography variant="h4">Meet our team</Typography>
            </StyledButton>
          </HeroImage>
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroImage
            bgImage="/assets/images/banner2.jpg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StyledButton variant="contained">
              <Typography variant="h4">Contact us</Typography>
            </StyledButton>
          </HeroImage>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamAndContact;