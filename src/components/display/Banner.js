import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const Banner = () => {
  const theme = useTheme();

  const BannerContainer = styled("div")({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "50px 0",
    textAlign: "center",
  });

  return (
    <BannerContainer>
      <Typography variant="h2" color="inherit">
        Providing Quality Legal Services
      </Typography>
    </BannerContainer>
  );
};

export default Banner;
