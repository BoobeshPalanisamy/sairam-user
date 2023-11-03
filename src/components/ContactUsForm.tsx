import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

function ContactUsForm() {
  return (
      <Container>
        <form
          style={{
            backgroundColor: "#f0f4f5",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" sx={{ color: "black", mb: 2 }}>
            Contact Us
          </Typography>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Name" fullWidth size="small" required />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Age" fullWidth size="small" required />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Enter Phone no" required fullWidth size="small" />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField
              label="Enter Email"
              fullWidth
              required
              type="email"
              size="small"
            />
          </Box>
          <Box sx={{ padding: "5px 0" }}>
            <TextField label="Message" multiline rows={4} fullWidth />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 1,
            }}
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Container>
  );
}

export default ContactUsForm;
