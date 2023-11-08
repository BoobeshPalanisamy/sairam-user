import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PageBanner from "../../components/PageBanner";
import {
  ourServices_careHomeVisa,
  ourServices_studentVisa,
} from "../../seed-data/seed-data";
import theme from "../../theme/theme";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { paths } from "../../routes/paths";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CommunicationTraining from "../../components/CommunicationTraining";
import AcademicGuidance from "../../components/AcademicGuidance";
import JobGuidance from "../../components/JobGuidance";

function Ourservices() {
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
      <AcademicGuidance />

      {/* Job Guidance */}
      <JobGuidance />
    </>
  );
}

export default Ourservices;
