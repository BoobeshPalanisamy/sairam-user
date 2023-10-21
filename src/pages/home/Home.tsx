import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import FeedBack from "../../components/FeedBack";
import FlagSlider from "../../components/FlagSlider";
import theme from "../../theme/theme";
import TrainingAndServiceHomePage from "../../components/TrainingAndServiceHomePage";

function Home() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box>
        <Box position="relative">
          <img
            src="assets\home\homepage_banner_sairam.jpg"
            alt="srisairam-academy-consultancy"
            width="100%"
            style={{ height: matches ? "250px" : "500px" }}
            className="homepage-banner"
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <h1
              style={{ fontSize: "40px", fontWeight: "bolder", color: "#fff" }}
            >
              SaiRam Consultancy and Academy
            </h1>
            <Typography
              sx={{
                fontSize: matches ? "25px" : "30px",
                fontWeight: "700",
                color: "orange",
              }}
            >
              Study,Work,Live Abroad
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box>
          <h1 style={{ textAlign: "center", padding: "20px 0" }}>
            Welcome To &nbsp;
            <span style={{ color: theme.palette.primary.main }}>
              Sri SaiRam Academy & Consultancy
            </span>
          </h1>
          <Typography
            sx={{
              textAlign: "center",
              paddingBottom: "20px",
              fontSize: matches ? "20px" : "30px",
            }}
          >
            We are a trustworthy & best overseas education consultants
            Coimbatore committed to assisting learning aspirants to pursue their
            education abroad. We are ready to complete your abroad admission
            pressure with our full-hearted from beginning to end. The study
            abroad consultants Coimbatore covers a vibrant team who opens the
            doors of success with a precise process to make your dream fly
            higher.
          </Typography>
        </Box>
      </Container>
      <h2
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontSize: "35px",
        }}
      >
        Choose Your &nbsp;
        <span style={{ color: theme.palette.primary.main }}>Destination</span>
      </h2>
      <FlagSlider />
      <h2
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontSize: "35px",
        }}
      >
        Our &nbsp;
        <span style={{ color: theme.palette.primary.main }}>Training</span>
        &nbsp;&&nbsp;
        <span style={{ color: theme.palette.primary.main }}>Services</span>
      </h2>
      <TrainingAndServiceHomePage />
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "30px 0", fontWeight: "bolder" }}
      >
        Hear from Our Customers
      </Typography>
      <FeedBack />
    </>
  );
}

export default Home;
