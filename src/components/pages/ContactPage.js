import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
});

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  color: theme.palette.whitesmoke,
  backgroundColor: theme.palette.palmeirasGreen,
  "&:hover": {
    backgroundColor: theme.palette.darkGreen,
  },
}));

function ContactPage() {
  const theme = useTheme();

  const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: "100px",
    paddingBottom: "40px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.whitesmoke,
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px",
    },
  }));

  return (
    <PageContainer>
      <Typography variant="h4" align="center">
        Contact us
      </Typography>
      <FormContainer noValidate autoComplete="off">
        <StyledTextField label="Name" variant="outlined" />
        <StyledTextField label="Email" variant="outlined" />
        <StyledTextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <SubmitButton endIcon={<SendIcon />} variant="contained">
          Send
        </SubmitButton>
      </FormContainer>
    </PageContainer>
  );
}

export default ContactPage;