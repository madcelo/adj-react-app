import { Typography, Box } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";

const Banner = () => {
  const theme = useTheme();

  const BannerContainer = styled(motion.div)({
    position: "relative",
    background: `url(/assets/images/banner4.jpg) no-repeat center center`,
    backgroundSize: "cover",
    height: "200px",
    color: theme.palette.golden,
    padding: "50px 0",
    textAlign: "center",
    paddingTop: "150px",
    transition: "0.3s ease-in-out",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.darkGreen, // Changed to dark green for better theme consistency
      opacity: 0.7, // Instead of rgba, maintain a separate opacity for better control
    },
    "& > *": {
      position: "relative",
      zIndex: 1, // Make sure children elements stay on top
    },
    [theme.breakpoints.up("md")]: {
      height: "300px", // Increase height on larger screens
      paddingTop: "200px",
    },
  });

  const boxVariants = {
    // Animation control
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.7, duration: 1 } },
  };

  return (
    <BannerContainer
      initial="hidden" // Starting state of animation
      animate="visible" // Ending state of animation
    >
      <Box sx={{ width: "50%" }} component={motion.div} variants={boxVariants}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Adjust as needed
          }}
        >
          Providing Quality Legal Services
        </Typography>{" "}
      </Box>
    </BannerContainer>
  );
};

export default Banner;
