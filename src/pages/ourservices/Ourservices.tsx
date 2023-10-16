import {
  Box,
  Container,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageBanner from "../../components/PageBanner";
import {
  ourServices_academicGuidance,
  ourServices_careHomeVisa,
  ourServices_communicationTraining,
  ourServices_jobGuidance,
  ourServices_studentVisa,
} from "../../seed-data/seed-data";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import theme from "../../theme/theme";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";

function Ourservices() {
  const matches = useMediaQuery("(min-width:1100px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageBanner
        imageUrl="assets\ourservices\ourservices_sairam_banner.jpeg"
        content="OurServices"
      />
      <Container>
        <Fade left>
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
            <Grid item xs={12} md={8}>
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
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  {ourServices_studentVisa.subHeading}
                </Typography>
                <List>
                  {ourServices_studentVisa.subContent.map((points, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ListItemIcon sx={{ minWidth: 0 }}>
                        <DoubleArrowIcon />
                      </ListItemIcon>
                      <ListItemText>{points.point}</ListItemText>
                    </Box>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Fade>
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
            <Grid item xs={12} md={8}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "700", margin: "10px 0" }}
              >
                CareHome <span style={{ color: "orange" }}>Visa</span>
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                {ourServices_careHomeVisa.content}
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>

      <Box
        sx={{
          fontWeight: "700",
          backgroundColor: "#f5f5f5",
        }}
        mt={2}
        pb={2}
      >
        <Container>
          <Typography variant="h3">
            Communication <span style={{ color: "orange" }}>Training</span>
          </Typography>
          <Grid
            container
            spacing={3}
            mt={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {ourServices_communicationTraining.map((service, index) => (
              <Grid item md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bolder",
                    color: theme.palette.primary.main,
                  }}
                >
                  {service.title}
                </Typography>
                <Paper
                  elevation={0}
                  key={index}
                  sx={{ height: matches ? "350px" : "auto" }}
                >
                  <Container>
                    <Typography variant="h6" sx={{ textAlign: "justify" }}>
                      {service.content}
                    </Typography>
                  </Container>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>
        <Fade left>
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
                src="assets\ourservices\academic_guidance_sairam.jpeg"
                alt="student_visa_sairam"
                height="300px"
                width="300px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "700", margin: "10px 0" }}
                >
                  Academic <span style={{ color: "orange" }}>Guidance</span>
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {ourServices_academicGuidance.academyGuidance_content}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bolder",
                    color: theme.palette.primary.main,
                  }}
                >
                  Academic Writing
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {ourServices_academicGuidance.academywriting_content}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Fade>
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
