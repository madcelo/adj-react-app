import { Typography, Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";

const Instagram = () => {
  const theme = useTheme();

  const InstagramContainer = styled(Container)(({ theme }) => ({
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: theme.palette.white,
    color: theme.palette.palmeirasGreen,
  }));

  const PostCard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.palmeirasGreen,
    color: theme.palette.white,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));

  const instagramPosts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
    { id: 3, title: "Post 3", content: "Content 3" },
    // ...
  ];

  return (
    <InstagramContainer maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <InstagramIcon fontSize="large" />
            <Typography variant="h4" align="center" gutterBottom>
              Siga-nos no Instagram!
            </Typography>
          </Box>
        </Grid>
        {instagramPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostCard>
              <Typography variant="h5" gutterBottom>
                {post.title}
              </Typography>
              <Typography>{post.content}</Typography>
            </PostCard>
          </Grid>
        ))}
      </Grid>
    </InstagramContainer>
  );
};

export default Instagram;