import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import theme from "../theme/theme";
import ContactAddress from "./ContactAddress";

function Footer() {
  const matches = useMediaQuery("(max-width:500px)");
  const services = [
    { service: "Student Visa" },
    { service: "Care Home Visa" },
    { service: "Communication Training" },
    { service: "Academic Guidance" },
    { service: "Job Guidance" },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "20px 0 20px 0",
          color: "#fff",
        }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item md={4} sx={{ display: matches ? "none" : "block" }}>
              <h1 style={{ margin: 0 }}>
                Sri Sairam Academy & Career Services
              </h1>
              <h3 style={{ fontWeight: "100", paddingTop: "10px", margin: 0 }}>
                One Stop Solution for Career Guidancy, Visa Processing, IELTS
                Coaching, Interview Training @ Namkkal
              </h3>
            </Grid>
            <Grid item md={4}>
              <h1 style={{ margin: 0 }}>Our Services</h1>
              <List sx={{ fontSize: "20px" }} dense>
                {services.map((service, index) => (
                  <ListItem key={index}>{service.service}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={4}>
              <ContactAddress color="#fff" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
