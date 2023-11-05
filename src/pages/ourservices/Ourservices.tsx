import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageBanner from "../../components/PageBanner";
import {
  ourServices_academicGuidance,
  ourServices_careHomeVisa,
  ourServices_jobGuidance,
  ourServices_studentVisa,
} from "../../seed-data/seed-data";
import theme from "../../theme/theme";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { paths } from "../../routes/paths";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CommunicationTraining from "../../components/CommunicationTraining";

function Ourservices() {
  const matches = useMediaQuery("(min-width:1100px)");
  return (
    <>
      <PageBanner
        imageUrl="assets\ourservices\ourservices_sairam_banner.jpg"
        content="OurServices"
      />
      <Container>
        {/* Student Visa */}
        <Fade left>
          <Link
            to={paths.STUDYVISA}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Grid container spacing={3} flexDirection="row-reverse" mt={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets\ourservices\student_visa_sairam.jpg"
                  alt="student_visa_sairam"
                  height="300px"
                  width="300px"
                  style={{ borderRadius: "50%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "700", margin: "10px 0" }}
                  >
                    Student <span style={{ color: "orange" }}>Visa</span>
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    {ourServices_studentVisa.content}
                  </Typography>
                  <Box mt={2}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ background: theme.palette.secondary.main }}
                    >
                      Read More <DoubleArrowIcon sx={{ fontSize: "x-small" }} />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Link>
        </Fade>
        {/* CareHome Visa */}
        <Link
          to={paths.CAREHOMEVISA}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Fade right>
            <Grid container spacing={3} mt={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets\ourservices\carehome_visa_sairam.jpeg"
                  alt="student_visa_sairam"
                  height="300px"
                  width="300px"
                  style={{ borderRadius: "50%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "700", margin: "10px 0" }}
                >
                  CareHome <span style={{ color: "orange" }}>Visa</span>
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {ourServices_careHomeVisa.content}
                </Typography>
                <Box mt={2}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ background: theme.palette.secondary.main }}
                  >
                    Read More <DoubleArrowIcon sx={{ fontSize: "x-small" }} />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Link>
      </Container>

      {/* Communication Training */}
      <Box mt={2}>
        <CommunicationTraining />
      </Box>

      {/* Academic Guidance */}
      <Box
        sx={{
          fontWeight: "700",
          backgroundColor: "#f5f5f5",
        }}
        pb={2}
      >
        <Container>
          <Typography variant="h3">
            Academic
            <span style={{ color: "orange", fontSize: "40px" }}>
              Works & Guidance
            </span>
          </Typography>
          <Grid
            container
            spacing={3}
            mt={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {ourServices_academicGuidance.map((service, index) => (
              <Grid item md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "20px",
                    boxShadow: "7px 7px 14px #cbced1,-7px -7px 14px #fff;",
                    height: matches ? "420px" : "auto",
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={service.image}
                        alt={service.name}
                        height="200px"
                        width="200px"
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bolder" }}
                      >
                        {service.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "18px" }}
                      >
                        {service.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>
        {/* Job Guidance */}
        <Fade right>
          <Grid container spacing={3} mt={2}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="assets\ourservices\job_guidance_sairam.jpeg"
                alt="student_visa_sairam"
                height="300px"
                width="300px"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "700", margin: "10px 0" }}
              >
                Job <span style={{ color: "orange" }}>Guidance</span>
              </Typography>
              {ourServices_jobGuidance.map((data, index) => (
                <Box key={index}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    {data.content}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </>
  );
}

export default Ourservices;
