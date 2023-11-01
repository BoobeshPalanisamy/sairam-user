import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme/theme";
import {
  HomeCareVisaPage_Cotent,
} from "../../seed-data/seed-data";

function CareHomeVisa() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Container>
      <Box>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          CareHome Visa
        </h1>
      </Box>
      <Grid container mt={3} mb={3} sx={{ background: "#f3f3f3" }}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="assets\ourservices\homeCareVisa\homecare_visa_sairam.jpg"
            alt="studyvisa_sairam"
            width="100%"
            style={{ height: matches ? "50vh" : "75vh" }}
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
              About CareHome Visa
            </Typography>
            {HomeCareVisaPage_Cotent.content.map((content, index) => (
              <Typography key={index} textAlign="justify">
                &#11162;&nbsp;{content}
              </Typography>
            ))}
          </Container>
        </Grid>
      </Grid>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", color: theme.palette.secondary.main }}
        >
          Benefits of CareHome Visa
        </Typography>
        {HomeCareVisaPage_Cotent.benefits.map((benefit, index) => (
          <Typography key={index} sx={{ fontSize: "20px" }}>
            &#11162; {benefit}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}

export default CareHomeVisa;
