import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import FeedBack from "../../components/FeedBack";
import FlagSlider from "../../components/FlagSlider";
import theme from "../../theme/theme";
import HomePageTrainingandServices from "../../components/HomePageTrainingandServices";
import { Link } from "react-router-dom";
import { paths } from "../../routes/paths";
import NewAndUpdatesPreviewHomePage from "../../components/NewAndUpdatesPreviewHomePage";

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
              style={{
                fontSize: matches ? "35px" : "50px",
                fontWeight: "bolder",
                color: "#fff",
                padding: "0 10px",
              }}
            >
              Sri SaiRam Academic and Career Consultancy
            </h1>
            <Typography
              sx={{
                fontSize: matches ? "30px" : "40px",
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
              Sri SaiRam Academic and Career Consultancy
            </span>
          </h1>
          <Typography
            sx={{
              textAlign: "center",
              paddingBottom: "20px",
              fontSize: matches ? "15px" : "20px",
            }}
          >
            Welcome to Sri SaiRam Academic and Career Consultancy! We are your
            comprehensive solution provider, offering a range of services
            including visa processing for &nbsp;
            <Link
              to={paths.STUDYVISA}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Study visas
            </Link>
            &nbsp;and &nbsp;
            <Link
              to={paths.CAREHOMEVISA}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Carehome visas
            </Link>
            ,&nbsp;
            <Link
              to={paths.IELTS}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              IELTS
            </Link>
            &nbsp; and&nbsp;
            <Link
              to={paths.TOEFL}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              TOEFL
            </Link>
            &nbsp; preparation,&nbsp;
            <Link
              to={paths.ACADEMICGUIDANCE}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Academic guidance
            </Link>
            , &nbsp;
            <Link
              to={paths.JOBGUIDANCE}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Job Guidance
            </Link>
            , and top-notch &nbsp;
            <Link
              to={paths.COMMUNICATIONTRAINING}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Communication training
            </Link>
            ,&nbsp;
            <Link
              to={paths.MANPOWER}
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontSize: matches ? "17px" : "22px",
              }}
              target="_blank"
            >
              Manpower Provider
            </Link>
            . Whether you're a student aspiring to study abroad, seeking
            homecare opportunities, or looking to enhance your language
            proficiency and career prospects, we're here to guide you every step
            of the way. Let us empower your academic and career journey with our
            expertise and personalized support.
          </Typography>
        </Box>
      </Container>
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          margin: "0",
          paddingTop: "10px",
          backgroundColor: "#d0f0f7",
        }}
      >
        Our &nbsp;
        <span style={{ color: theme.palette.primary.main }}>Services</span>
        &nbsp;&&nbsp;
        <span style={{ color: theme.palette.primary.main }}>Training</span>
      </h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#d0f0f7",
        }}
        p={3}
      >
        <HomePageTrainingandServices />
      </Box>
      <Box>
        <NewAndUpdatesPreviewHomePage />
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "30px 0", fontWeight: "bolder" }}
        >
          Hear from Our Customers
        </Typography>
        <FeedBack />
      </Box>
      <Box>
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
      </Box>
    </>
  );
}

export default Home;
