import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { IELTS_page } from "../../seed-data/seed-data";
import ContactUsForm from "../../components/ContactUsForm";
import theme from "../../theme/theme";

function Ielts() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box>
            <Box>
              <img
                src="assets\ourservices\IELTS_Coaching_Sairam.jpg"
                alt="srisairam-academy-consultancy"
                width="100%"
                style={{ height: matches ? "250px" : "500px" }}
                className="homepage-banner"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} xs={12} sx={{ padding: "20px 0" }}>
          <ContactUsForm />
        </Grid>
      </Grid>
      <Container>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: theme.palette.primary.main }}>
            Sir SaiRam IELTS
          </span>
          &nbsp; Coaching and Guidance Centre
        </h1>
        <Grid container mt={3} mb={3} sx={{ background: "#f3f3f3" }}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="assets\ourservices\IELTS_sairam.jpg"
              alt="studyvisa_sairam"
              width="100%"
              style={{ height: matches ? "50vh" : "70vh" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <Typography style={{ fontSize: "25px", fontWeight: "bolder" }}>
                About IELTS
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "15px" }}>
                {IELTS_page.content}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Ielts;
